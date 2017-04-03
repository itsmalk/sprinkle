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

export const SET_SWIPER_INDEX = `${PREFIX}SET_SWIPER_INDEX`;
export function setSwiperIndex(payload) {
  return {
    type: SET_SWIPER_INDEX,
    payload,
  };
}
