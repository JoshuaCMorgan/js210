/*
-- Process: 
  - Input: array of numbers
    - out of order
  - Output: array of same numbers ordered least to greatest value.
  - Model the problem:
  - Rules:
    - loop through all numbers  for sorting as long a one swap has occured 
    - if swaping doesn't take place,
      - then stop looping through numbers for sorting.
      - return array
    - evaluation through iteration
      - two elements at a time
      - if first is less than or equal to second, 
        don't swap, 
        continue to next two set of elements.
      - otherwise, swap 
        - element at current index with element at next index
        - and when go through another cycle of iteration.
    - After iterating through all elements
      - if no swapping has occured, stop looping
      - otherwise, loop again. 
    
    - evaluate each element with next element
      [2, 1, 8, 7]
      [2, 1] [1, 8] [ 8, 7] (for understanding only)
      - if second is greater than first, swap
      [2, 1] => [1, 2] [1, 2, 8, 7]
      [2, 8] => 2, 8 => same
      [8, 7] => 7, 8 => [1, 2, 7 8]
    - if no swapping, return original
    - if string, swap based on characters, case-sensative

  

-- Examples/Test Cases: (generic/edge)
// return original if no swap
bubbleSort([1, 2]) // [1, 2]

// only positive values, swap if second less than first
bubbleSort([2, 1]) // [1, 2]

bubbleSort([2, 1, 3]) // [1, 2, 3]

bubbleSort([3, 9, 6]) // [3, 6, 9]

bubbleSort([10, 3, 2, 1]) // [1, 2, 3, 10]

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


-- Data structure:
  array

-- Algorithm:
  iterate through array and break out only if no swapping has occured.
  set swapped to false
  iterate through index values up to second from last
    if value at current index is less than or equal to value at second index
      continue to next index num;

    swap value at current index with value at next index
    set swapped to true

    if swapped is false, break out of ieration cycle



-- Code:
*/

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] <= array[i]) {
        continue;
      }

      swap(array, i - 1, i);
      swapped = true;
    }

    if (!swapped) {
      break;
    }
  }
}

function swap(array, idx1, idx2) {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}
// return original if no swap
bubbleSort([1, 2]) // [1, 2]

// only positive values, swap if second less than first
bubbleSort([2, 1]) // [1, 2]

bubbleSort([2, 1, 3]) // [1, 2, 3]

bubbleSort([3, 9, 6]) // [3, 6, 9]

bubbleSort([10, 3, 2, 1]) // [1, 2, 3, 10]

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]