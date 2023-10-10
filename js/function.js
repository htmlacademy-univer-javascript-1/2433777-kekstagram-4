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
