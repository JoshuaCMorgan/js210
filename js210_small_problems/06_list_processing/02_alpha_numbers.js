/*
Write a function that takes an array of integers between 0 and 19 and returns an array of 
those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, 
fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Do not mutate the argument.
*/
/*
- Problem: (input/output/Rules/Questions)
  input: array: array of integers, object: 
  output: array of strings
  rules: map integers to strings

- Examples (test cases)

- Data Structure
  - array
  - object
    { 0: 'zero',
      1: 'one' }
- Algorithm (mental model)
  - create array object of numeric words mapped to their index at top of function
  - create shallow copy of array so not to mutate it.
  - create wordSort function that takes two numbers and sorts according to english word
    - reference values in array object using current number in iteration.
      if first greater than second, then return 1
      if first is less than second, then return -1
      else, return 0



- Code (Implement a solution)

*/
function wordSort(num1, num2) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

// Alternative using map to reduce the work comparison has to do.

function alphabeticNumberSort(array) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  // extract the actual values into a temporary array 
  let mappedLetters =  [...array].map(function(val, ind){
    return {index: ind, value: NUMBER_WORDS[val][0]}
  });

  // sort the temporary array with the elements that are already evaluated/transformed
  mappedLetters.sort(function(a, b) {
    if (a.value < b.value) {
      return -1;
    } else if (a.value > b.value) {
      return 1;
    } else return 0;
  });

  // iterate array to get an array with right order.
  let sortedWords = mappedLetters.map(function(obj) {
    return array[obj.index];
  });
  
  return sortedWords;
}


alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
