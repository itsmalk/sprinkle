import { combineReducers } from 'redux';
import * as Actions from '@/actions/ui';
import { PRICE_RANGE } from '@/constants';

function rehydrated(state = false, action = {}) {
  if (action.type === Actions.SET_REHYDRATED) {
    return true
  }
  return state;
}

function showSearchResults(state = false, action = {}) {
  if (action.type === Actions.SET_SHOW_SEARCH_RESULTS) {
    return action.payload;
  }
  return state;
}

function sortResultsByRating(state = true, action = {}) {
  if (action.type === Actions.SET_SORT_RESULTS_BY_RATING) {
    return action.payload;
  }
  return state;
}

function priceRange(state = PRICE_RANGE.OFF, action = {}) {
  if (action.type === Actions.SET_PRICE_RANGE) {
    return action.payload;
  }
  return state;
}

function photoAccessChecked(state = false, action = {}) {
  if (action.type === Actions.SET_PHOTO_ACCESS_CHECKED) {
    return action.payload;
  }
  return state;
}

function photoAccess(state = false, action = {}) {
  if (action.type === Actions.SET_PHOTO_ACCESS) {
    return action.payload;
  }
  return state;
}

function cameraAccessChecked(state = false, action = {}) {
  if (action.type === Actions.SET_CAMERA_ACCESS_CHECKED) {
    return action.payload;
  }
  return state;
}

function cameraAccess(state = false, action = {}) {
  if (action.type === Actions.SET_CAMERA_ACCESS) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  rehydrated,
  showSearchResults,
  sortResultsByRating,
  priceRange,
  photoAccess,
  cameraAccess,
  photoAccessChecked,
  cameraAccessChecked,
})
