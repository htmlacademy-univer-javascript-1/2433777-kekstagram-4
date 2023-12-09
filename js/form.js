const MAX_HASHTAG_COUNT = 5;
const regExp = /^#[a-zа-яё0-9]{0,19}$/i;
const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const overlay = form.querySelector('.img-upload__overlay');
const fileField = form.querySelector('.img-upload__input');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const cancelButton = form.querySelector('.img-upload__cancel');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload--invalid',
  successClass: 'img-upload--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  form.reset();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const validateTags = (tagString) => tagString.trim().split(' ').filter((tag) => Boolean(tag.length));
const testTags = (value) => validateTags(value).every((tag) => regExp.test(tag));
const validateTagsCount = (value) => validateTags(value).length <= MAX_HASHTAG_COUNT;
const validateTagUniqueness = (value) => {
  const lowerCaseTags = validateTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onFileInputChange = () => {
  showModal();
};

const onCancalButtonClick = () => {
  hideModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancalButtonClick);
form.addEventListener('submit', onFormSubmit);
pristine.addValidator(
  hashtagField,
  validateTagsCount,
  `Число хэштегов не должно превышать ${MAX_HASHTAG_COUNT}`
);

pristine.addValidator(
  hashtagField,
  validateTagUniqueness,
  'Хэштеги должны быть уникальными'
);

pristine.addValidator(
  hashtagField,
  testTags,
  'Невалидный хэштег'
);


