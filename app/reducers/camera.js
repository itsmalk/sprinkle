import Immutable from 'immutable';
import * as Actions from '@/actions/camera';

export function cameraRoll(state = Immutable.List(), action = {}) {
  switch (action.type) {
    case Actions.SET_CAMERA_ROLL:
      return Immutable.List(action.payload)
    case Actions.APPEND_CAMERA_ROLL:
      return state.push(action.payload)
    default:
      return state;
  }
}

export function selectedPhoto(state = null, action = {}) {
  if (action.type === Actions.SET_SELECTED_PHOTO) {
    return action.payload;
  }
  return state;
}
