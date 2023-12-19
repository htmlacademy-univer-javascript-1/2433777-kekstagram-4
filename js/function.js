const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('проверяемая строка', 18);

const isPalindrome = (string) => {
  let comparisonString = '';
  const processedString = string.replaceAll(' ','').toLowerCase();
  for (let i = string.length - 1; i >= 0; i--) {
    comparisonString += processedString[i];
  }
  return string === comparisonString;
};
isPalindrome('топот');

const extractDigits = (string) => {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const digit = parseInt(string[i], 10);

    if (!Number.isNaN(digit) && digit <= 9 && digit >= 0) {
      result += digit.toString();
    }
  }

  return result === '' ? NaN : parseInt(result, 10);
};
extractDigits('2023 год');

function timeStringToMinutes(timeString) {
  return timeString.split(':').reduce((accumulator, currentValue, index, array) =>
    accumulator + Number(currentValue) * Math.pow(60, array.length - index - 1), 0);
}

function isWithinSchedule(workdayStart, workDayFinish, startTime, durationMinutes) {
  const redactedWorkdayStart = timeStringToMinutes(workdayStart);
  const redactedWorkdayFinish = timeStringToMinutes(workDayFinish);
  const redactedStartTime = timeStringToMinutes(startTime);

  return redactedStartTime >= redactedWorkdayStart && redactedStartTime + durationMinutes <= redactedWorkdayFinish;
}
isWithinSchedule('08:00', '17:30', '14:00', 90); //true
