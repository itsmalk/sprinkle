const PREFIX = 'UI/'

export const SET_REHYDRATED = `${PREFIX}SET_REHYDRATED`;
export function setRehydrated() {
  return { type: SET_REHYDRATED };
}

export const SET_SEARCH_FOCUSED = `${PREFIX}SET_SEARCH_FOCUSED`;
export function setSearchFocused(payload) {
  return {
    type: SET_SEARCH_FOCUSED,
    payload,
  };
}

export const SET_SHOW_PANEL = `${PREFIX}SET_SHOW_PANEL`;
export function setShowPanel(payload) {
  return {
    type: SET_SHOW_PANEL,
    payload,
  };
}

export const SET_SHOW_SEARCH_RESULTS = `${PREFIX}SET_SHOW_SEARCH_RESULTS`;
export function setShowSearchResults(payload) {
  return {
    type: SET_SHOW_SEARCH_RESULTS,
    payload,
  };
}
