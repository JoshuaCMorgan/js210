/*
-- Process: 
  - Input: array of integers and single integer
    - single integer is the number of digits from right side that will 
      be affected by rotation.
    - rotation size will be smaller than array size or equal


  - Output: 
    - new array with rotated digits
      - rotation is one digit rotation.
  - Model the problem:
  - Rules
    - array of digits and the rotation size
      - rotation size is last n digits.
    - what constitutes rotation?
      - given digits of rotation size of array
        - shift first to back, other left
    - rotation group is concatenated with group not rotated.
      [1, 2, 3, 4], 2
      [1, 2] [3, 4] 
             [4, 3]
      [1, 2] [4, 3]
      [1, 2, 4, 3]

-- Examples/Test Cases: (generic/edge)
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

-- Data structure:


-- Algorithm:
  - convert number to array of digts. 123 => [1, 2, 3]
  - rotation array slice off from array rotation size 
  - stable array splice from first to index of rotation size start.
    [1, 2, 3, 4] => 2 [3, 4]
    - rotate rotation array
      - first to back, remaining shift left.
  - concat return value to first stable portion
  - convert digits to string, join convert to number.
-- Code:
*/
function rotateRightmostDigits(number, n) {
  const numberString = String(number);
  const firstPart = numberString.slice(0, numberString.length - n);
  const secondPart = numberString.slice(numberString.length - n);
  const resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917