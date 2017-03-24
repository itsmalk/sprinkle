import { createSelector } from 'reselect'
import { cameraAccessGranted } from '@/selectors/camera';

export const renderCamera = createSelector(
  cameraAccessGranted,
  state => state.ui.post,
  (granted, post) => {
    if (!granted) return false
    return !!(
      post.swiperIndex === 0 &&
      (
        !post.selectedPhoto ||
        post.selectedPhoto.src === 'photos'
      )
    )
  }
);

export const selectedPhoto = createSelector(
  state => state.ui.post.selectedPhoto,
  selectedPhoto => selectedPhoto
)

export const showCropButton = createSelector(
  selectedPhoto,
  selectedPhoto => selectedPhoto && selectedPhoto.src === 'photos'
)
