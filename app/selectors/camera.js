import { createSelector } from 'reselect'

export const cameraAccessGranted = createSelector(
  state => state.ui.camera.permission,
  permission => permission === 'authorized'
);
