import { showBigPicture } from './fullPhoto.js';
import { renderThumbnails } from './thumbnails.js';
import { getPictures } from './data.js';

const container = document.querySelector('.pictures');
const photos = getPictures();

const renderGallery = () =>{
  container.addEventListener('click', (evt) =>{
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if(!thumbnail){
      throw 'Не существует такого элемента';
    }
    evt.preventDefault();
    const picture = photos.find((item) => item.id === +thumbnail.dataset.thumbnailId);
    showBigPicture(picture);
  });
  renderThumbnails(photos);
};
export{renderGallery};
