/*
Write a function that takes an array of numbers and returns the sum of the sums 
of each leading subsequence in that array. Examine the examples to see what we 
mean. You may assume that the array always contains at least one number.
*/

const sumOfSums = function(numbers) {
  let total = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    let currentSet = numbers.slice(0, index + 1);
    total += currentSet.reduce((accumulation, currentValue) => accumulation + currentValue)
  }

  console.log(total);
}

function sumOfSums(numbers) {
  return numbers.map((number, idx) => numbers.slice(0, idx + 1)
                                             .reduce((sum, value) => sum + value))
                                             .reduce((sum, value) => sum + value);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
