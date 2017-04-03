const PREFIX = 'AUTOCOMPLETE/';

export const SET_VISIBLE = `${PREFIX}SET_VISIBLE`;
export function setVisible(payload) {
  return {
    type: SET_VISIBLE,
    payload,
  };
}

export const SET_HIDING = `${PREFIX}SET_HIDING`;
export function setHiding(payload) {
  return {
    type: SET_HIDING,
    payload,
  };
}
