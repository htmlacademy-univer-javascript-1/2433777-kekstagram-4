export const bigPicture = document.querySelector('.big-picture');
export const commentCount = bigPicture.querySelector('.social__comment-count');
export const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentList = bigPicture.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');

let allComments = [];
let commentsIndex = 0;

const createComment = ({avatar, name, message}) => {
  const comment = socialComment.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  commentList.innerHTML = '';

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 5 && commentsIndex < allComments.length; i++) {
    const comment = createComment(allComments[commentsIndex]);
    fragment.append(comment);
    commentsIndex++;
  }

  commentList.append(fragment);

  commentsLoader.classList.toggle('hidden', commentsIndex >= allComments.length);
};

const setAllComments = (comments) => {
  allComments = comments;
  commentsIndex = 0;
  renderComments();
};

export { setAllComments, renderComments };
