/*
-- Process: 
  - Input: array or other data type
    - can be empty
    - can include any data type
      - same data type or different data types
    - length from empty, to one to more than one.
  - Output: copy of array with elements 'rotated'.
    - return undefined if input is not array.
  - Model the problem:
  - Rules
    - rotate?
      - first element is place on end of array
        - other elements 'shifted' left.
    - if argument is other than array, return undefined.
      - empty array if empty
-- Examples/Test Cases: (generic/edge)

-- Data structure:
  array

-- Algorithm:
  [1, 2, 3] 
      retrieve first value and save to variable
      slice the array to create a new array with only elements after first
      set to new variable
      push first value to end of new array.
      [2, 3]
      1
      [2, 3, 1]

-- Code:
*/
function rotateArray(array) {
  if (!Array.isArray(array)) {
    return;
  };

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}



console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                     // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]