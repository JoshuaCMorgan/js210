/*
-- Process: 
  - Input: three 'angles' - integers
  - Output: triangle classification - string
    - right, acute, obtuse, or invalid
  - Model the problem:
  - Rules
    - Invalid
      - sum of angles 
       - not 180 and 
       - less than zero
    - integer
      - whole numbers
      - represent degress
    - Given three numbers
      - one of three is equal to 90, right
      - one of three is greater than 90, obtuse
      - all three less than 90, acute
  

-- Examples/Test Cases: (generic/edge)
Invalid: sum is greater than 180
triangle(80, 80, 30) // invalid

Invalid: sum is less than 180
triangle(50, 50, 50) // invalid

Invalid: one of the three is equal to zero
triangle(0, 90, 90) // invalid

one of three is equal to 90
triangle(90, 45, 45) // right
triangle(30, 90, 60) // right

all three less than 90
triangle(60, 60, 60) // acute
triangle(60, 70, 50) // acute

one of three is greater than 90
triangle(120, 40, 20) // obtuse

-- Data structure:

-- Algorithm:
  create array to hold angles [120, 40, 20]

  if angles are valid, then get angle type
    else, return invalid

  get angle type
    - filter array for angle equal to 90, if length 1, then return right
    - filter array for angles less than 90, if length 3, then return acute
    - filter array for angles greater than 90, if length 1, then return obtuse 
-- Code:
*/
function triangle(side1, side2, side3) {
  let angles = [side1, side2, side3];

  if (isValid(angles)) {
    return getAngletype(angles);
  } else {
    return 'invalid'
  }
}

function getAngletype(angles) {
  const sideEqual90 = (value) => value === 90;
  const sidesLess90 = (value) => value < 90;
  const sideGreaterThan90 = (value) => value > 90;

  if (angles.filter(sideEqual90).length === 1) {
    return 'right';
  } else if (angles.filter(sidesLess90).length === 3) {
    return 'acute';
  } else if (angles.filter(sideGreaterThan90).length == 1) {
    return 'obtuse';
  };
}

function isValid(angles) {
  const sum = (accum, currentValue) => accum + currentValue;
  const equalToZero = (value) => value === 0;

  if (angles.reduce(sum) !== 180) {
    //console.log('sum not equal to zero');
    return false;
  } else if (angles.some(equalToZero)) {
   //console.log('one angle is equal to zero');
   return false;
  } else {
    return true;
  }
  
}

// Invalid: sum is greater than 180
console.log(triangle(80, 80, 30)); // invalid);

// Invalid: sum is less than 180
console.log(triangle(50, 50, 50)); // invalid);

// Invalid: one of the three is equal to zero
console.log(triangle(0, 90, 90)); // invalid

// one of three is equal to 90
console.log(triangle(90, 45, 45)); // right);
console.log(triangle(30, 90, 60)); // right

// all three less than 90
console.log(triangle(60, 60, 60)); // acute);
console.log(triangle(60, 70, 50)); // acute

// one of three is greater than 90
console.log(triangle(120, 40, 20));// obtuse