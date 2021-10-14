/*
The previous exercise mimics the parseInt function to a lesser extent. In this
exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate
number as an integer. The string may have a leading + or - sign; if the first
character is a +, your function should return a positive number; if it is a -,
your function should return a negative number. If there is no sign, return a
positive number.

You may assume the string will always contain a valid number.
*/
const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
}
function stringToInteger(string) {
  let integers = string.split('').map( value =>
    DIGITS[value]
    )
    
  let number = 0;
  integers.forEach( digit =>
    number = number * 10 + digit
  )

  return number;
}

function stringToSignedInteger(string) {
  switch(string[0]) {
    case('-'):  return -stringToInteger(string.slice(1));
    case('+'):  return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100