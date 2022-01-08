/*
Write a function that takes one argument, a positive integer, and returns the sum 
of its digits. Do this without using for, while, or do...while loops - instead, 
use a series of method calls to perform the sum.

*/

function sum(number) {
  return String(number)
    .split("")
    .reduce((accum, digit) => accum + Number(digit), 0);
}

// One key ingredient is using an initial value.  Otherwise, this would engage
// implicit coercion.  You could not include the initial value.  But
// you would have to call Number function on accum variable, which engages
// unecessary coersion during each iteration. 

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45