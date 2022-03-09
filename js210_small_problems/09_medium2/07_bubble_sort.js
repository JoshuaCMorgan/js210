/*
-- Process: 
  - Input: array of numbers
    - out of order
  - Output: array of same numbers ordered least to greatest value.
  - Model the problem:
  - Rules:
    - keep looping through numbers until no swapping has taken place
    - if a swap has taken place, iterate again to check for sorting.
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
do sort the array
  set swap = false (if swapping takes place at any time, set to true )
    
    iterate through index values up to but not including last
    if current index value is greater than next index value
      set currentIndValue variable to value at first indexed position
      set nextIndValue variable to next
      set first to next, second to current
      set swap to true
    else, let it be
  while swap is equal to true, sort the array

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