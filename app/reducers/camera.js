import { combineReducers } from 'redux';
import * as Actions from '@/actions/camera';

function cameraRoll(state = [], action = {}) {
  if (action.type === Actions.APPEND_CAMERA_ROLL) {
    return [action.payload, ...state];
  }
  return state;
}

export default combineReducers({
  cameraRoll,
})
