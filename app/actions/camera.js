const PREFIX = 'CAMERA/'

export const SET_PERMISSION = `${PREFIX}SET_PERMISSION`;
export function setPermission(payload) {
  return {
    type: SET_PERMISSION,
    payload,
  };
}

export const SET_FLASH = `${PREFIX}SET_FLASH`;
export function setFlash(payload) {
  return {
    type: SET_FLASH,
    payload,
  };
}

export const SET_GRID = `${PREFIX}SET_GRID`;
export function setGrid(payload) {
  return {
    type: SET_GRID,
    payload,
  };
}
