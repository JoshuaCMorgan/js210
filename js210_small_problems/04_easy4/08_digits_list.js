/*
Write a function that takes one argument, a positive integer,
and returns a list of the digits in the number.
*/

function digitList(number) {
  let resultArray = [];

  while (number > 0) {
    let quotient = number / 10;
    let remainder = number % 10;
    resultArray.unshift(remainder);
    number = quotient - (quotient - Math.trunc(quotient));
  };

  return resultArray;
}

// String version
/*
function digitList(number) {
  const numberStringArray = String(number).split('');
  const numberArray = [];

  for (let i = 0; i < numberStringArray.length; i += 1) {
    numberArray.push(parseInt(numberStringArray[i], 10));
  }

  return numberArray;
}
*/

// a bit more obscure
/*
function digitList(num) {
  return [...String(num)].map(Number);
}
*/

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]