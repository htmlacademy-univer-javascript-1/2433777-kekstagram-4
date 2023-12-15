import { showBigPicture } from './fullPhoto.js';
import { renderThumbnails } from './thumbnails.js';
import { getPictures } from './data.js';

const container = document.querySelector('.pictures');
const photos = getPictures();

const renderGallery = () => {
  if (!container) {
    throw('Элемент контейнера не найден');
  }

  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      throw ('Миниатюра не найдена');
    }
    evt.preventDefault();
    const picture = photos.find((item) => item.id === +thumbnail.dataset.thumbnailId);
    if (picture) {
      showBigPicture(picture);
    } else {
      throw ('Картинка не найдена');
    }
  });

  renderThumbnails(photos);
};

export { renderGallery };
