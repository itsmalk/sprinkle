import { combineReducers } from 'redux';
import ui from './ui';
import cameraRoll from './cameraRoll'

export default combineReducers({
  ui,
  cameraRoll,
});
