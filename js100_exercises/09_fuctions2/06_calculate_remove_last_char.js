/*
Create a function removeLastChar that takes a string as an argument, and
returns the string without the last character.
*/

function removeLastChar(word) {
  return word.substring(0, word.length - 1);
}
console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'