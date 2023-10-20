const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_MESSAGES = 1;
const MAX_MESSAGES = 2;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const OBJECT_ARRAY_LENGTH = 25;


const NAMES = [
  'Пубертатная язва',
  'Злодей Британец',
  'Горячая чикса',
  'Какой-то мужик',
  'Так себе шутник',
  'Недопонятый гений'
];

const COMMENTS = `Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`.split(/\n/g);

const DESCRIPTIONS = `Ой-ой
Никак вы блин не научитесь
За орду
Криптиды существуют!
Нужно больше золота`.split(/\n/g);

function getRandomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomArrayElement (elements) {
  return elements[getRandomNumber(0, elements.length - 1)];
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function generateText (sentence) {
  return function () {
    const getSentenceId = createRandomIdFromRangeGenerator(0, sentence.length - 1);
    return sentence[getSentenceId()];
  };
}

const getObjectId = createRandomIdFromRangeGenerator(1, OBJECT_ARRAY_LENGTH);
function createObject () {
  const idValue = getObjectId();
  return {
    id: idValue,
    url: `photos/${idValue}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomNumber(MIN_COMMENTS, MAX_COMMENTS)}, createComment(createRandomIdFromRangeGenerator(MIN_COMMENTS, MAX_COMMENTS))),
  };
}

function createComment (getIdFunction) {
  return function () {
    return {
      id: getIdFunction(),
      avatar: `img/avatar-${getRandomNumber(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: Array.from({length: getRandomNumber(MIN_MESSAGES, MAX_MESSAGES)}, generateText(COMMENTS)),
      name: getRandomArrayElement(NAMES),
    };
  };
}

const objects = Array.from({length: OBJECT_ARRAY_LENGTH}, createObject);

