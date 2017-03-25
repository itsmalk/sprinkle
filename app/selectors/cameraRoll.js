import { createSelector } from 'reselect'

export const photoAccessGranted = createSelector(
  state => state.ui.cameraRoll.permission,
  permission => permission === 'authorized'
);
