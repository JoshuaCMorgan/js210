/*
-- Process: 
  - Input: a integer
    - any length
  - Output: the maximum rotation of that integer
    - what is the max rotation of any integer.
      - in turn, each consecutive place value digit is rotated to the left until no more 
        place values left. 
  - Model the problem:
  - Rules
    - the total number (max num) of rotations is length of integer minus 1
      - 735291
        - 6 place values will have 5 total rotations
    - what is 'rotate place value digit to the left'
      - [ 7, 3, 5, 2, 9, 1 ]
      - take first digit, put on end, shift others left
        [7 [3, 5, 2, 9, 1]]
        [[3, 5, 2, 9, 1] 7]
        [3, 5, 2, 9, 1, 7]
    - each consecutive place value digit performs rotation from left to right
      - rotation group is right most digits, less one until 1 left
      - [[7, 3, 5, 2, 9, 1]] => [7 [3, 5, 2, 9, 1]] => [3, 5, 2, 9, 1, 7]
      - [3, [5, 2, 9, 1, 7]]  => [5, [2, 9, 1, 7]]  => [2, 9, 1, 7, 5]
      - [3, 2, [9, 1, 7, 5]]
      - rotation is always left most digit with remaining digits
        - [7 [3, 5, 2, 9, 1]] => [3, 5, 2, 9, 1, 7]
        - [5, [2, 9, 1, 7]]  => [2, 9, 1, 7, 5]
    - rotation group is spliced from stable group, then concatenated
    - leading zeros get dropped

-- Examples/Test Cases: (generic/edge)
    maxRotation(735291);          // 321579
    maxRotation(3);               // 3
    maxRotation(35);              // 53
    maxRotation(105);             // 15 -- the leading zero gets dropped
    maxRotation(8703529146);      // 7321609845
-- Data structure:
  Number, String, array

-- Algorithm:
  - iterate through rotationSize numbers from max to min.
    - rotation size is length of digits less 1, 5, 4, 3, 2, 1

  - rotate right most digits based on current rotation size
    - convert number to array of string digits
    - slice out stable group
    - slice out rotation group
      - rotate first number of rotation group
    - concate stable group and rotation group
    - convert to integer and return.

  - rotate first number of rotationGroup
   
-- Code:
*/
function maxRotation(number) {

  for (let rotationSize = String(number).length; rotationSize > 1; rotationSize -= 1) {
    number = rotateRightMostDigits(number, rotationSize);
  }
  return number;
}

function rotateRightMostDigits(number, rotationSize) {
  let strDigits = String(number).split('')
  let stableGroup = strDigits.slice(0, strDigits.length - rotationSize);
  let rotationGroup = strDigits.slice(strDigits.length - rotationSize);
  
  let rotatedDigits = stableGroup.concat(rotateDigits(rotationGroup));
  return Number(rotatedDigits.join('')); 
}

function rotateDigits(strDigits) {
  return strDigits.slice(1).concat(strDigits[0]);
}
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
 console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log( maxRotation(8703529146));      // 7321609845