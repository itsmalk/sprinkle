import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import immutableTransform from 'redux-persist-transform-immutable';
import { createEpicMiddleware } from 'redux-observable';
import createLogger from 'redux-logger';
import rootReducer from '@/reducers';
import * as Actions from '@/actions/ui';
import rootEpic from '@/epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

let finalCreateStore;
if (process.env.NODE_ENV === 'development') {
  finalCreateStore = compose(
    applyMiddleware(epicMiddleware, createLogger()),
    autoRehydrate()
  )(createStore);
}
else {
  finalCreateStore = compose(
    applyMiddleware(epicMiddleware),
    autoRehydrate()
  )(createStore);
}

export default function configureStore() {
  const InitialState = {};
  const store = finalCreateStore(rootReducer, InitialState);
  persistStore(store, {
    whitelist: [],
    storage: AsyncStorage,
    transforms: [immutableTransform({
      whitelist: [],
    })],
  }, () => {
    store.dispatch(Actions.setRehydrated());
  });
  return store;
}
