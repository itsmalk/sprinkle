import { combineReducers } from 'redux';
import * as Actions from '@/actions/cameraRoll';

function permission(state = null, action = {}) {
  if (action.type === Actions.SET_PERMISSION) {
    return action.payload;
  }
  return state
}

function render(state = false, action = {}) {
  if (action.type === Actions.SET_RENDER) {
    return action.payload;
  }
  return state
}

function refreshing(state = false, action = {}) {
  switch (action.type) {
    case Actions.SET_REFRESHING:
      return action.payload
    case Actions.SET_CAMERA_ROLL:
      return false
    default:
      return state;
  }
}

export default combineReducers({
  render,
  permission,
  refreshing,
})
