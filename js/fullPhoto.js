import { bigPicture, setAllComments, commentCount, commentsLoader, renderComments } from './comments.js';
const body = document.querySelector('body');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');
const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

function onDocumentKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const renderPictureDetails = ({url, likes, description, comments}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;

  setAllComments(comments);
};

const loadMoreComments = () => {
  renderComments();
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.remove('hidden');
  commentCount.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeyDown);

  renderPictureDetails(data);

  // Добавляем обработчик события для кнопки "Загрузить ещё"
  commentsLoader.addEventListener('click', loadMoreComments);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
