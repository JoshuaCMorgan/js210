/*
Write a function that calculates and returns the index of the first Fibonacci number
that has the number of digits specified by the argument. (The first Fibonacci number
has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.
*/

/*
 start with number 1 and return fib numbs incrementally, and place in container
  if the fib num has same numb of digits as argument, count size of container
  and return number.
*/

function findFibonacciIndexByLength(numOfDigits) {
  let firstNum = 1n;
  let secondNum = 1n; 
  let count = 2n;
  let fibNum;
 
  do {
    fibNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = fibNum;
    count++
  }  while (String(fibNum).length < numOfDigits);

 return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log( findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// // The last example may take a minute or so to run.