import * as Actions from '@/actions/camera';

export function selectedPhoto(state = null, action = {}) {
  if (action.type === Actions.SET_SELECTED_PHOTO) {
    return action.payload;
  }
  return state;
}
