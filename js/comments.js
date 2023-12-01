export const bigPictureElement = document.querySelector('.big-picture');
export const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
export const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const commentListElement = bigPictureElement.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');

let allComments = [];
let commentsIndex = 0;

const createComment = ({avatar, name, message}) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 5 && commentsIndex < allComments.length; i++) {
    const comment = createComment(allComments[commentsIndex]);
    fragment.append(comment);
    commentsIndex++;
  }

  commentListElement.append(fragment);

  commentsLoaderElement.classList.toggle('hidden', commentsIndex >= allComments.length);
};

const setAllComments = (comments) => {
  allComments = comments;
  commentsIndex = 0;
  renderComments();
};

export { setAllComments, renderComments };
