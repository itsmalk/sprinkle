import { combineReducers } from 'redux';
import * as Actions from '@/actions/camera';

function permission(state = null, action = {}) {
  if (action.type === Actions.SET_PERMISSION) {
    return action.payload;
  }
  return state
}

export default combineReducers({
  permission,
})
