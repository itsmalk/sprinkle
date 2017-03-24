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

export const SET_SORT_RESULTS_BY_RATING = `${PREFIX}SET_SORT_RESULTS_BY_RATING`;
export function setSortResultsByRating(payload) {
  return {
    type: SET_SORT_RESULTS_BY_RATING,
    payload,
  };
}

export const SET_PRICE_RANGE = `${PREFIX}SET_PRICE_RANGE`;
export function setPriceRange(payload) {
  return {
    type: SET_PRICE_RANGE,
    payload,
  };
}
