import { preview } from './effects.js';

const SCALE = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DEFAULT: 100,
};

const upload = document.querySelector('.img-upload');
const scaleInput = upload.querySelector('.scale__control--value');
const increaseButton = upload.querySelector('.scale__control--bigger');
const decreaseButton = upload.querySelector('.scale__control--smaller');

const scalePhoto = (value) => {
  preview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const adjustScale = (step) => {
  const currentValue = parseInt(scaleInput.value, 10);
  const newValue = Math.max(Math.min(currentValue + step, SCALE.MAX), SCALE.MIN);
  scalePhoto(newValue);
};

const decreasePhoto = () => {
  adjustScale(-SCALE.STEP);
};

const increasePhoto = () => {
  adjustScale(SCALE.STEP);
};

decreaseButton.addEventListener('click', decreasePhoto);
increaseButton.addEventListener('click', increasePhoto);

const resetScale = () => scalePhoto(SCALE.DEFAULT);
export { resetScale };
