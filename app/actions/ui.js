const PREFIX = 'UI/'

export const SET_REHYDRATED = `${PREFIX}SET_REHYDRATED`;
export function setRehydrated() {
  return { type: SET_REHYDRATED };
}
