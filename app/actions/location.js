const PREFIX = 'LOCATION/'

export const ENABLE_LOCATION = `${PREFIX}ENABLE_LOCATION`
export function enableLocation() {
  return {
    type: ENABLE_LOCATION,
  }
}

export const SET_LOCATION_PERMISSION = `${PREFIX}SET_LOCATION_PERMISSION`
export function setLocationPermission(payload) {
  return {
    type: SET_LOCATION_PERMISSION,
    payload,
  }
}

export const LOCATE_USER = `${PREFIX}LOCATE_USER`
export function locateUser() {
  return {
    type: LOCATE_USER,
  }
}

export const SET_FOLLOW_USER = `${PREFIX}SET_FOLLOW_USER`
export function setFollowUser(payload) {
  return {
    type: SET_FOLLOW_USER
  }
}
