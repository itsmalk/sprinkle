const PREFIX = 'CAMERA/'

export const APPEND_CAMERA_ROLL = `${PREFIX}APPEND_CAMERA_ROLL`;
export function appendCameraRoll(img) {
  return {
    type: APPEND_CAMERA_ROLL,
    payload: img,
  }
}

export const SET_SELECTED_PHOTO = `${PREFIX}SET_SELECTED_PHOTO`;
export function setSelectedPhoto(img) {
  return {
    type: SET_SELECTED_PHOTO,
    payload: img,
  }
}
