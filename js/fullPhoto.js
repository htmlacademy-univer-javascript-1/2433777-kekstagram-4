const COMMENTS_TO_LOAD = 5;

const bigPicture = document.querySelector('.big-picture');
const commentsCount = bigPicture.querySelector('.comments-count');
const visibleCommentsCount = bigPicture.querySelector('.comments-visible-count');
const commentList = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');
const socialComment = document.querySelector('.social__comment');


const createComment = ({avatar, name, message}) =>{
  const comment = socialComment.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  commentList.innerHTML = '';

  if(COMMENTS_TO_LOAD >= comments.length){
    commentsLoader.classList.add('hidden');
  }else{
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  comments.forEach((item, index) => {
    const comment = createComment(item);

    if (index < COMMENTS_TO_LOAD) {
      comment.classList.remove('hidden');
    } else {
      comment.classList.add('hidden');
    }

    fragment.append(comment);
  });

  commentList.append(fragment);
};

const hideBigPicture = () => {
  commentsLoader.classList.remove('hidden');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
  document.removeEventListener('click', onCancelButtonClick);
};

function onDocumentKeyDown(evt){
  if(evt.key === 'Escape'){
    evt.preventDefault();
    hideBigPicture();
  }
}

function onCancelButtonClick () {
  hideBigPicture();
}

const renderPictureDetails = ({url, likes, description}) =>{
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
  const commentsLength = data.comments && data.comments.length ? data.comments.length : 0;

  visibleCommentsCount.textContent = commentsLength < COMMENTS_TO_LOAD ? commentsLength : COMMENTS_TO_LOAD;
  commentsCount.textContent = commentsLength;

  renderPictureDetails(data);
  renderComments(data.comments);
};


const updateCurrentSocialComments = (commentsVisibleLenght) => {
  visibleCommentsCount.textContent = commentsVisibleLenght;

  if (commentsVisibleLenght < commentList.childElementCount) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
};

const loadComments =() => {
  for (let i = 0; i < COMMENTS_TO_LOAD; i++) {
    const hiddenSocialComment = commentList.querySelector('.hidden');
    if (hiddenSocialComment !== null) {
      hiddenSocialComment.classList.remove('hidden');
    }
  }
  const hiddenSocialCommentsLength = commentList.querySelectorAll('.hidden').length;
  const commentsVisibleLenght = commentList.childElementCount - hiddenSocialCommentsLength;
  updateCurrentSocialComments(commentsVisibleLenght);
};

cancelButton.addEventListener('click', () =>{
  onCancelButtonClick();
});
commentsLoader.addEventListener('click', () => {
  loadComments();
});

export{showBigPicture};
