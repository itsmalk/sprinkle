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

export default combineReducers({
  selectedPhoto,
  swiperIndex,
})
