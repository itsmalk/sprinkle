import { combineReducers } from 'redux';
import * as Actions from '@/actions/ui';
import { PRICE_RANGE } from '@/constants';
import cameraRoll from './cameraRoll';
import camera from './camera';
import post from './post';
import autocomplete from './autocomplete';

function rehydrated(state = false, action = {}) {
  if (action.type === Actions.SET_REHYDRATED) {
    return true;
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

export default combineReducers({
  rehydrated,
  showSearchResults,
  sortResultsByRating,
  priceRange,
  cameraRoll,
  post,
  camera,
  autocomplete,
});
