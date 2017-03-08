import { combineReducers } from 'redux';
import ui from './ui';
import camera from './camera'

export default combineReducers({
  ui,
  camera,
});
