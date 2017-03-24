const PREFIX = 'CAMERA_ROLL/';

export const SET_RENDER = `${PREFIX}SET_RENDER`;
export function setRender(payload) {
  return {
    type: SET_RENDER,
    payload,
  };
}

export const SET_PERMISSION = `${PREFIX}SET_PERMISSION`;
export function setPermission(payload) {
  return {
    type: SET_PERMISSION,
    payload,
  };
}

export const REFRESH = `${PREFIX}REFRESH`;
export function refresh(showRefreshing) {
  return {
    type: REFRESH,
    payload: {
      showRefreshing
    }
  };
}

export const SET_REFRESHING = `${PREFIX}SET_REFRESHING`;
export function setRefreshing(payload) {
  return {
    type: SET_REFRESHING,
    payload,
  };
}

export const SET_SHOW_REFRESHING = `${PREFIX}SET_SHOW_REFRESHING`;
export function setShowRefreshing(payload) {
  return {
    type: SET_SHOW_REFRESHING,
    payload,
  };
}

export const SET_CAMERA_ROLL = `${PREFIX}SET_CAMERA_ROLL`;
export function setCameraRoll(payload) {
  return {
    type: SET_CAMERA_ROLL,
    payload,
  }
}
