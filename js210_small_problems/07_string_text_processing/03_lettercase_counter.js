/*
Write a function that takes a string and returns an object containing three properties: 
one representing the number of characters in the string that are lowercase letters, one 
representing the number of characters that are uppercase letters, and one representing 
the number of characters that are neither.
*/

function letterCaseCount(string) {
  let result = {lowercase: 0, uppercase: 0, neither: 0};
  let upper = /[A-Z]/;
  let lower = /[a-z]/;
  [...string].forEach((character) => {
    if (upper.test(character)) {
      result.uppercase += 1;
    } else if (lower.test(character)) {
      result.lowercase += 1;
    } else {
      result.neither += 1;
    }
  });
 
  return result;
}

// alternative
function letterCaseCount(string) {
  const lowerArray = string.match(/[a-z]/g) || [];
  const upperArray = string.match(/[A-Z]/g) || [];
  const neitherArray = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  };
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }