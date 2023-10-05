const lengthCheck = (string, maxLength) => string.length <= maxLength;
console.log(lengthCheck('проверяемая строка', 18));

const palindrome = function (string) {
  let comparisonString = '';
  let processedString = string.replaceAll(' ','').toLowerCase();
  for(let i = string.length - 1; i >= 0; i--) {
    comparisonString += processedString[i];
  }
  return  string === comparisonString;
}
console.log(palindrome('топот'));
