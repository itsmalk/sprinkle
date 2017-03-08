export const APPEND_CAMERA_ROLL = 'APPEND_CAMERA_ROLL';
export function appendCameraRoll(img) {
  return {
    type: APPEND_CAMERA_ROLL,
    payload: img,
  }
}
