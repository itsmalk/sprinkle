const PREFIX = 'POST/'

export const SET_SELECTED_PHOTO = `${PREFIX}SET_SELECTED_PHOTO`;
export function setSelectedPhoto(img) {
  return {
    type: SET_SELECTED_PHOTO,
    payload: img,
  }
}

export const SET_SWIPER_INDEX = `${PREFIX}SET_SWIPER_INDEX`;
export function setSwiperIndex(index) {
  return {
    type: SET_SWIPER_INDEX,
    payload: index,
  }
}
