
import {
  PHOTO_OBJECT_ARRAY_LENGTH,
  createPhotoObject
} from './data.js';
import {
  renderThumbnails
} from './thumbnails.js';
const photosArray = Array.from({length: PHOTO_OBJECT_ARRAY_LENGTH}, createPhotoObject);
renderThumbnails(photosArray);


