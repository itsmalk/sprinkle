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
