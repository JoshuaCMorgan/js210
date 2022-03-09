/*
-- Process: 
  - Input: integer
  - Output: integer
    - next featured number greater than the integer
  - Model the problem:
  - Rules
    - featured number
      - odd number
      - multiple of 7
      - all digits occuring once
    - numbers greater/equal to 9876543201, return string
    - every other multiple of 7 is odd. 
    - increment by 1 until multiple of 7
      12, 13, 14
      if even number add 7: 21
      if each digit occurs once, return digit

  

-- Examples/Test Cases: (generic/edge)
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
-- Data structure:
  number, 
  string - evaluate digits of integer
-- Algorithm:
  iterate from one more than input up to infinity 12, 13, 14, 21
    if multiple of 7, 
      if even number(function), 
        add 6 and set num, continue
      else (it is odd), 
        if singleDigitsOnly(function)
          digits occur once, return integer
        else, add 14. 
    else
      continue adding one until

  evenNum
    number remainder 2 is equal 0.

  singleDigitsOnly
    covert to string. split. 
    filter group for those digits whose index 
    does not match current index.
      - if return array length greater than 0, then
      duplicates exist, return false.

-- Code:
*/
function featured(integer) {

  for (let num = integer + 1; num <= 9876543201; num += 1) {
    if (num % 7 === 0) {
      if (evenNum(num)) {
        num += 6;
        continue;
      } else if (singleDigitNums(num)) {
        return num;
      } else {
        num += 13;
      }
    }
  } 

  return "There is no possible number that fulfills those requirements."
};
function singleDigitNums(num) {
  let strDigits = String(num).split('');
  let repeats = strDigits.filter((digit, index) => strDigits.indexOf(digit) !== index )
  return !repeats.length > 0;
  
}

function evenNum(number) {
  return number % 2 === 0;
}

console.log(featured(12));           // 21
console.log( featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."