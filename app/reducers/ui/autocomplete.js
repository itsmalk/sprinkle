import { combineReducers } from 'redux';
import * as Actions from '@/actions/autocomplete';

function visible(state = false, action = {}) {
  if (action.type === Actions.SET_VISIBLE) {
    return action.payload;
  }
  return state;
}

function hiding(state = false, action = {}) {
  if (action.type === Actions.SET_HIDING) {
    return action.payload;
  }
  return state;
}

function swiperIndex(state = 0, action = {}) {
  if (action.type === Actions.SET_SWIPER_INDEX) {
    return action.payload;
  }
  return state;
}

export default combineReducers({
  visible,
  hiding,
  swiperIndex,
});
