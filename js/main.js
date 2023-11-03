
import {
  PHOTO_OBJECT_ARRAY_LENGTH,
  createPhotoObject
} from './data.js';
const photosArray = Array.from({length: PHOTO_OBJECT_ARRAY_LENGTH}, createPhotoObject);

const lintIssue = (arr) => arr;
lintIssue(photosArray);
//Для того чтобы линт не ругался :)

