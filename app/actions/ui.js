const PREFIX = 'UI/'

export const SET_REHYDRATED = `${PREFIX}SET_REHYDRATED`;
export function setRehydrated() {
  return { type: SET_REHYDRATED };
}

export const SET_SHOW_SEARCH_RESULTS = `${PREFIX}SET_SHOW_SEARCH_RESULTS`;
export function setShowSearchResults(payload) {
  return {
    type: SET_SHOW_SEARCH_RESULTS,
    payload,
  };
}

export const SET_SORT_RESULTS_BY_RATING = `${PREFIX}SET_SORT_RESULTS_BY_RATING`;
export function setSortResultsByRating(payload) {
  return {
    type: SET_SORT_RESULTS_BY_RATING,
    payload,
  };
}

export const SET_PRICE_RANGE = `${PREFIX}SET_PRICE_RANGE`;
export function setPriceRange(payload) {
  return {
    type: SET_PRICE_RANGE,
    payload,
  };
}

export const SET_PHOTO_ACCESS_CHECKED = `${PREFIX}SET_PHOTO_ACCESS_CHECKED`;
export function setPhotoAccessChecked(payload) {
  return {
    type: SET_PHOTO_ACCESS_CHECKED,
    payload,
  };
}

export const SET_PHOTO_ACCESS = `${PREFIX}SET_PHOTO_ACCESS`;
export function setPhotoAccess(payload) {
  return {
    type: SET_PHOTO_ACCESS,
    payload,
  };
}

export const SET_CAMERA_ACCESS_CHECKED = `${PREFIX}SET_CAMERA_ACCESS_CHECKED`;
export function setCameraAccessChecked(payload) {
  return {
    type: SET_CAMERA_ACCESS_CHECKED,
    payload,
  };
}

export const SET_CAMERA_ACCESS = `${PREFIX}SET_CAMERA_ACCESS`;
export function setCameraAccess(payload) {
  return {
    type: SET_CAMERA_ACCESS,
    payload,
  };
}
