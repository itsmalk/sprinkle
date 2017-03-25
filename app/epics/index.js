import { combineEpics } from 'redux-observable';
import cameraRoll from '@/epics/cameraRoll';

const rootEpic = combineEpics(
  cameraRoll,
);

export default rootEpic;
