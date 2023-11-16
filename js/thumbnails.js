const pictures = document.querySelector('.pictures');
const thumbnail = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({ url, description, likes, comments }) => {
  const thumbnail = thumbnail.cloneNode(true);
  const thumbnailImage = thumbnail.querySelector('.picture__img');
  thumbnailImage.src = url;
  thumbnailImage.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  return thumbnail;
};
function renderThumbnails(pictures) {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  pictures.append(fragment);
}
export { renderThumbnails };
