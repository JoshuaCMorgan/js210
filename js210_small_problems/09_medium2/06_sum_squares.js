/*
-- Process: 
  - Input: integer
  - Output: integer
    - square of sum of integers from 1 to input - sum of squares
  - Model the problem:
  - Rules
    - sum of integers 1 up to and including input
      - if 3, then (1 + 2 + 3)
    - capture square of sum
      (1 + 2 + 3)^2
    - capture sum of all squares
      - if 3, then 1^2 + 2^2 + 3^2
  

-- Examples/Test Cases: (generic/edge)
sumSquareDifference(0);       // 'number should be positive integer'
sumSquareDifference(1);      // 0
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(4);      // 22 --> (1 + 2 + 3 + 4)**2 - (1**2 + 2**2 + 3**2 + 4**2)
sumSquareDifference(1);      // 0
sumSquareDifference(10);     // 2640
sumSquareDifference(100);    // 25164150
-- Data structure:
  - array? just stick with numbers

-- Algorithm:
  set sum and sumofsquares to 0

  iterate through numbers 1 to n
    add current number to sum
    get value of current number power 2 add to sumofsquares
  
  return sum power 2 - sumofsquares

-- Code:
*/
function sumSquareDifference(n) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
    sumOfSquares += i ** 2;
  }

  return sum ** 2 - sumOfSquares;
}

//sumSquareDifference(0);       // 'number should be positive integer'
sumSquareDifference(1);      // 0
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(4);      // 22 --> (1 + 2 + 3 + 4)**2 - (1**2 + 2**2 + 3**2 + 4**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(100);    // 25164150