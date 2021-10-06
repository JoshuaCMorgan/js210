/*
Write a function that takes one argument, a positive integer, and returns a string of
alternating '1's and '0's, always starting with a '1'. The length of the string should
match the given integer.
*/

/*
  create a for loop that counts from 1 to argument
    if num odd, put "1" in string, if even put "0"
    return string
*/

function stringy(stringLength) {
  let string = '';

  for (let count = 1; count <= stringLength; count++) {
    if (count % 2 === 1) {
      string += "1";
    } else string += "0";
  }
  console.log(string);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

