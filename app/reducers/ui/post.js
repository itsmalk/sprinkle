import { combineReducers } from 'redux';
import * as Actions from '@/actions/post';

function selectedPhoto(state = null, action = {}) {
  if (action.type === Actions.SET_SELECTED_PHOTO) {
    return action.payload
  }
  return state
}

function swiperIndex(state = 1, action = {}) {
  if (action.type === Actions.SET_SWIPER_INDEX) {
    return action.payload
  }
  return state
}

function liked(state = false, action = {}) {
  if (action.type === Actions.SET_LIKED) {
    return action.payload;
  }
  return state;
}

function stars(state = 0, action = {}) {
  if (action.type === Actions.SET_STARS) {
    return action.payload
  }
  return state;
}

function dish(state = '', action = {}) {
  return state;
}

function restaurant(state = '', action = {}) {
  return state;
}

function price(state = '', action = {}) {
  return state;
}

export default combineReducers({
  selectedPhoto,
  swiperIndex,
  liked,
  stars,
  dish,
  restaurant,
  price
})
