const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_ID_PHOTO = 1;
const MAX_ID_PHOTO = 25;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MAX_PHOTO_ID = 25;
const PHOTO_OBJECT_ARRAY_LENGTH = 25;


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


const getRandomNumber = (min, max) =>{
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper-lower + 1 ) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
};

const getCommentId = createRandomIdFromRangeGenerator(1, 1000);
const getPhotoId = createRandomIdFromRangeGenerator(MIN_ID_PHOTO, MAX_ID_PHOTO);
const getUrlId = createRandomIdFromRangeGenerator(MIN_ID_PHOTO, MAX_PHOTO_ID);

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomNumber(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhotoObject = () => ({
  id: getPhotoId(),
  url: `photos/${getUrlId()}.jpg` ,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length: getRandomNumber(MIN_COMMENTS, MAX_COMMENTS)}, createComment)

});

const getPhotos = () => Array.from({length:PHOTO_OBJECT_ARRAY_LENGTH}, createPhotoObject);

export{ getPhotos };

