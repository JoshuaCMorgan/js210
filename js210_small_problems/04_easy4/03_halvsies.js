/*
Write a function that takes an array as an argument and returns an array that 
contains two elements, each of which is an array. Put the first half of the original 
array elements in the first element of the return value, and put the second half in 
the second element. If the original array contains an odd number of elements, place 
the middle element in the first half array.
*/
/*
- Problem: (input/output/Rules/Questions)
  input: array of digits
  output array with subarrays
  rules
    - even length--even division
    - odd length--first subarray has 1 more
    - always have 2 subarrays
- Examples (test cases)

- Data Structure

- Algorithm (mental model)
  - declare/initial empty resultArray 
  - d/i variable middleIndex
    - equals array length / 2..get floor value
  - slice array twice
    - up to middle index
    - from middle index

- Code (Implement a solution)

*/
function halvsies(numbers) {
  let half = Math.ceil((numbers.length) / 2);
  let firstHalf = numbers.slice(0, half);
  let secondHalf = numbers.slice(half);
  
  return [firstHalf, secondHalf]
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]