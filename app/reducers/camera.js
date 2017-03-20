import { combineReducers } from 'redux';
import * as Actions from '@/actions/camera';

function cameraRoll(state = [], action = {}) {
  if (action.type === Actions.APPEND_CAMERA_ROLL) {
    return [...state, action.payload];
  }
  return state;
}

function selectedPhoto(state = null, action = {}) {
  if (action.type === Actions.SET_SELECTED_PHOTO) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  cameraRoll,
  selectedPhoto,
})
