import {
  getRandomNumber,
  getRandomArrayElement,
  createRandomIdFromRangeGenerator,
  generateText
} from './util.js';

export const MIN_LIKES = 15;
export const MAX_LIKES = 200;
export const MIN_COMMENTS = 0;
export const MAX_COMMENTS = 30;
export const MIN_AVATAR = 1;
export const MAX_AVATAR = 6;
export const PHOTO_OBJECT_ARRAY_LENGTH = 25;

const NAMES = [
  'Пубертатная язва',
  'Злодей Британец',
  'Горячая чикса',
  'Какой-то мужик',
  'Так себе шутник',
  'Недопонятый гений'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Ой-ой',
  'Никак вы блин не научитесь',
  'За орду',
  'Криптиды существуют!',
  'Нужно больше золота'
];

const getPhotoObjectId = createRandomIdFromRangeGenerator(1, PHOTO_OBJECT_ARRAY_LENGTH);

function createComment(getIdFunction) {
  return function () {
    return {
      id: getIdFunction(),
      avatar: `img/avatar-${getRandomNumber(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: Array.from({length: getRandomNumber(1, 2)}, generateText(COMMENTS)),
      name: getRandomArrayElement(NAMES),
    };
  };
}

export const createPhotoObject = () => {
  const idValue = getPhotoObjectId();
  return {
    id: idValue,
    url: `photos/${idValue}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomNumber(MIN_COMMENTS, MAX_COMMENTS)}, createComment(createRandomIdFromRangeGenerator(MIN_COMMENTS, MAX_COMMENTS))),
  };
};

createPhotoObject();

