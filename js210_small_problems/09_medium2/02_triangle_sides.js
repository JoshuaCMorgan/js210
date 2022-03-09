/*
-- Process: 
  - Input: three integers representing sides of triangle
  - Output: string
    - representing triangle classification
    - invalid triangle
  - Model the problem:
  - Rules
    - invalid
      - two shortest side added together is less than longest side
      - any one side equal to zero, invalid.
    - equilateral
      - all 3 numbers same
    - isosceles
      - two numbers same
    - scalene
      - no numbers same
    

  

-- Examples/Test Cases: (generic/edge)
// any sice 0 then invalid
triangles(0, 1, 2) // "invalid"

// shortest sides less than longest invalid
triangle(1, 1, 3) // 

// all three same: equilateral
triangle(3, 3, 3) // 

// two nums same (not invalid) isosdles
triangle(2, 2, 3) // 

// numbers can include decimal numbers
triangle(3, 3, 1.5) // 

// 3 different sides scalene, equal to third- valid since not less
triangle(1, 2, 3) // 


-- Data structure:

-- Algorithm:
  if first element is less than one or 
    first two added together less than third, return false
  - if first same as second and second same as third, return equalateral
  - if first same as second or second same as third, return isosceles 
    (Though there is a edge case here, equalateral is maintained by first if)
  - all the rest, return scalene

-- Code:
*/


function triangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);
  if (a < 1 || (a + b) < c) return 'invalid';
  if (a === b && b === c) return 'equilateral';
  if (a === b || b === c) return 'isosceles';
  return 'scalene';
}

// any first 0 then invalid
console.log(triangle(0, 1, 2)); // "invalid"

// shortest sides less than longest invalid
console.log(triangle(1, 1, 3)); // 'invalid'

// // all three same: equilateral
console.log(triangle(3, 3, 3));// 'eqilateral'

// // two nums same (not invalid) isosdles
console.log( triangle(2, 2, 3)); // 'isoscles'

// // numbers can include decimal numbers
console.log(triangle(3, 3, 1.5)); // 'isoscles'

// // 3 different sides scalene, equal to third- valid since not less
console.log(triangle(1, 2, 3)); // 'scalene'