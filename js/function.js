const lengthCheck = (string, maxLength) => string.length <= maxLength;
console.log(lengthCheck('проверяемая строка', 18));

const palindrome = function (string) {
  let comparisonString = '';
  const processedString = string.replaceAll(' ','').toLowerCase();
  for(let i = string.length - 1; i >= 0; i--) {
    comparisonString += processedString[i];
  }
  return  string === comparisonString;
};
console.log(palindrome('топот'));

function extractDigits(string) {
  let result = '';

  for(let i = 0; i < string.length; i++) {
    const digit = parseInt(string[i], 10);

    if (!Number.isNaN(digit) && digit <= 9 && digit >= 0) {
      result += digit.toString();
    }
  }
  return result === '' ? NaN : parseInt(result, 10);
}
console.log(extractDigits('а я томат'));
