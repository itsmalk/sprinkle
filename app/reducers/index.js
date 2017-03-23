import { combineReducers } from 'redux';
import ui from './ui';
import * as camera from './camera'

export default combineReducers({
  ui,
  ...camera,
});
