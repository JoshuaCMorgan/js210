/*
Write a function that takes two array arguments, each containing a list of 
numbers, and returns a new array containing the products of all combinations of 
number pairs that exist between the two arrays. The returned array should be 
sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/

/*
- Problem: (input/output/Rules/Questions)
  input: two arrays - numbers
  output: new array 
    - product of combination pairs,
    - sorted
    - ascending order, numeric
  rules
    - all products captured as element
- Examples (test cases)

- Data Structure

- Algorithm (mental model)
  - declare result array
  - oop through numbers of first array
    - save current value in variable, let currentOperand = n
    - loop through each number of second array
      product = curreentOperand * n
      - push to result array



- Code (Implement a solution)

*/


const multiplyAllPairs = function(numSet1, numSet2) {
  let products = [];

  numSet1.forEach(number1 => {
    numSet2.forEach(number2 => {
      products.push(number1 * number2);
    });
  
   
  })

  products.sort((a, b) => a - b);
}
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]