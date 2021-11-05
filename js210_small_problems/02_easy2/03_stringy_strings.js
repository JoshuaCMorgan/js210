/*
Write a function that takes one argument, a positive integer, and returns a string
of alternating '1's and '0's, always starting with a '1'. The length of the string
should match the given integer.
*/



function stringy(number) {
  let binary = '';

  for (let i = 1; i <= number; i += 1) {
    binary += i % 2;
  }

  return binary;
  }
/*
function stringy(length) {
  return new Array(length).fill('1').join('').replace(/(.)(.)/g, '$10');
}
*/
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"