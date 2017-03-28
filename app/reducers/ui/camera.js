import { combineReducers } from 'redux';
import * as Actions from '@/actions/camera';

function permission(state = null, action = {}) {
  if (action.type === Actions.SET_PERMISSION) {
    return action.payload;
  }
  return state
}

function flash(state = false, action = {}) {
  if (action.type === Actions.SET_FLASH) {
    return action.payload;
  }
  return state
}

function grid(state = false, action = {}) {
  if (action.type === Actions.SET_GRID) {
    return action.payload;
  }
  return state
}

export default combineReducers({
  permission,
  flash,
  grid,
})
