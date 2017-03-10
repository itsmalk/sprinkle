import { combineReducers } from 'redux';
import * as Actions from '@/actions/ui';

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

export default combineReducers({
  rehydrated,
  showSearchResults
})
