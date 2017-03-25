const PREFIX = 'CAMERA/'

export const SET_PERMISSION = `${PREFIX}SET_PERMISSION`;
export function setPermission(payload) {
  return {
    type: SET_PERMISSION,
    payload,
  };
}
