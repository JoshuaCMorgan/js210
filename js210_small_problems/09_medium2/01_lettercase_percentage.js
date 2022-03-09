/*
-- Process: 
  - Input: string
    - any character type, all fair game
    - at least one character
  - Output: an object
    - percentages
      - lowercase, uppercase, neither
      - value 
        - string
        - percentage of characters with property condition
  - Model the problem:
    - get count of each category of character type, then find the pecentage of that count. 
  - Rules:
    - object default value 
      - "0.00"
      - 2 place values
    - what is a percentage
      - total # of characters of property divided by total length of string.
        - "Aa"
          - uppercase: 1
          - total length = 2
          - percentage 1 / 2 = .5
        - converted to 100
          multiply by 100

  

-- Examples/Test Cases: (generic/edge)
// smallest size one letter, default 00.00
letterPercentages('a');
// { lowercase: "100.00", uppercase: "00.00", neither: "00.00" }

// space characters are included
letterPercentages('a ');
// { lowercase: "50.00", uppercase: "00.00", neither: "50.00" }

// pecentage value is to second place value
letterPercentages('aaB');
// { lowercase: "66.67", uppercase: "33.33", neither: "00.00" }

// neither proprerty includes all character types other than alpha
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
-- Data structure:

-- Algorithm:
  - get count of string length save to count variable
  - create percentage object for the three categories
    - find all matches of lowercase letters or empty array
      - divide count by total count
  

-- Code:
*/

function letterPercentages(string) {
  const count = string.length;

  return {
   lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
   uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
   neither: (((string.match(/[^a-z]/ig) || []).length / count) * 100).toFixed(2),
 };
};

// smallest size one letter, default 0.00
letterPercentages('a');
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

// // space characters are included
 letterPercentages('a ');
// // { lowercase: "50.00", uppercase: "0.00", neither: "50.00" }

// // pecentage value is to second place value
letterPercentages('aaB');
// // { lowercase: "66.67", uppercase: "33.33", neither: "0.00" }

// // neither proprerty includes all character types other than alpha
 letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }