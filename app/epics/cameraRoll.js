import { combineEpics } from 'redux-observable';
import RNPhotosFramework from 'react-native-photos-framework';
import * as Actions from '@/actions/cameraRoll';

const attemptRefresh = (action$, store) => action$.ofType(Actions.REFRESH)
  .filter(() => {
    const {
      ui: {
        cameraRoll: {
          refreshing,
        }
      }
    } = store.getState()
    return !refreshing
  })
  .mapTo(Actions.setRefreshing(true))

const refresh = (action$, store) => action$.ofType(Actions.SET_REFRESHING)
  .filter(action => action.payload)
  .mergeMap(() => {
    const fetchParams = {
      fetchOptions: {
        mediaTypes: ['image'],
        sortDescriptors : [
          {
            key: 'creationDate',
            ascending: false,
          }
        ]
      }
    };
    return RNPhotosFramework.getAssets(fetchParams)
  })
  .map(response => {
    const images = response.assets
      .filter(asset => !!(asset && asset.image))
      .map(asset => ({ ...asset.image, src: 'photos' }))
    return Actions.setCameraRoll(images)
  })

export default combineEpics(
  attemptRefresh,
  refresh,
);
