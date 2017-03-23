const PREFIX = 'CAMERA/'

export const SET_CAMERA_ROLL = `${PREFIX}SET_CAMERA_ROLL`;
export function setCameraRoll(payload) {
  return {
    type: SET_CAMERA_ROLL,
    payload,
  }
}

export const APPEND_CAMERA_ROLL = `${PREFIX}APPEND_CAMERA_ROLL`;
export function appendCameraRoll(payload) {
  return {
    type: APPEND_CAMERA_ROLL,
    payload,
  }
}

export const SET_SELECTED_PHOTO = `${PREFIX}SET_SELECTED_PHOTO`;
export function setSelectedPhoto(img) {
  return {
    type: SET_SELECTED_PHOTO,
    payload: img,
  }
}
