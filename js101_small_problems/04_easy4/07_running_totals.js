/*
Write a function that takes an array of numbers and returns an array 
with the same number of elements, but with each element's value being 
the running total from the original array.
*/

function runningTotal(numbers) {
  let resultArray = [];
  let sum = 0;

  for (index = 0; index <= numbers.length - 1; index += 1) {
    sum += numbers[index];
    resultArray.push(sum);
  }

  return resultArray;

  // let sum = 0;
  // let resultArray = numbers.map((value) => sum += value )
  // return resultArray;
};


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []