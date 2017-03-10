const PREFIX = 'UI/'

export const SET_REHYDRATED = `${PREFIX}SET_REHYDRATED`;
export function setRehydrated() {
  return { type: SET_REHYDRATED };
}

export const SET_SHOW_SEARCH_RESULTS = `${PREFIX}SET_SHOW_SEARCH_RESULTS`;
export function setShowSearchResults(payload) {
  return {
    type: SET_SHOW_SEARCH_RESULTS,
    payload,
  };
}
