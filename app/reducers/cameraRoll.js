import Immutable from 'immutable';
import * as Actions from '@/actions/cameraRoll';

export default function cameraRoll(state = Immutable.List(), action = {}) {
  switch (action.type) {
    case Actions.SET_CAMERA_ROLL:
      return Immutable.List(action.payload)
    default:
      return state;
  }
}
