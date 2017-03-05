import { createSelector } from 'reselect'

export const showPanel = createSelector(
  state => state.ui.showPanel,
  showPanel => showPanel
);
