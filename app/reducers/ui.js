import { combineReducers } from 'redux';
import * as Actions from '@/actions/ui';

function rehydrated(state = false, action = {}) {
  if (action.type === Actions.SET_REHYDRATED) {
    return true
  }
  return state;
}

export default combineReducers({
  rehydrated,
})
