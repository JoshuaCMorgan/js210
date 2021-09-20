/*
Implement a function repeat that repeats an input string a given number of
times, as shown in the example below; without using the pre-defined string
method String.prototype.repeat().
*/

function repeat(number, string) {
  let newValue = '';
  for (let count = 1; count <= number; count += 1) {
    value += string;
  }
  return newValue;
}

// or in place of for statement
// while(number < 0) {
//   newValue += string;
//   number += 1;
// }

// or using an array
const repeat = (number, string) => (new Array(number)).fill(string).join('');

console.log(repeat(3, 'ha'));