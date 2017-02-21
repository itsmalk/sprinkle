import { combineReducers } from 'redux';
import * as Actions from '@/actions/ui';

function rehydrated(state = false, action = {}) {
  if (action.type === Actions.SET_REHYDRATED) {
    return true
  }
  return state;
}

function searchFocused(state = false, action = {}) {
  if (action.type === Actions.SET_SEARCH_FOCUSED) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  rehydrated,
  searchFocused,
})
