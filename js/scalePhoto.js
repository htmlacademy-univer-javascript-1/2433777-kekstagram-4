const SCALE = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DEFAULT: 100,
};

const upload = document.querySelector('.img-upload');
const scaleInput = upload.querySelector('.scale__control--value');
const decreaseButton = upload.querySelector('.scale__control--smaller');
const increaseButton = upload.querySelector('.scale__control--bigger');
const preview = upload.querySelector('.img-upload__preview img');

const scalePhoto = (value) => {
  preview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onDecreaseButtonClick = () => {
  scalePhoto(parseInt(scaleInput.value, 10) - SCALE.STEP > 0 ? parseInt(scaleInput.value, 10) - SCALE.STEP : SCALE.MIN);
};

const onIncreaseButtonClick = () => {
  scalePhoto(parseInt(scaleInput.value, 10) + SCALE.STEP <= 100 ? parseInt(scaleInput.value, 10) + SCALE.STEP : SCALE.MAX);
};

export const resetScale = () => scalePhoto(SCALE.DEFAULT);

decreaseButton.addEventListener('click', onDecreaseButtonClick);
increaseButton.addEventListener('click', onIncreaseButtonClick);
