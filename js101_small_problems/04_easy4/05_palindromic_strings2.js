/*
Write another function that returns true if the string passed as an 
argument is a palindrome, or false otherwise. This time, however, 
your function should be case-insensitive, and should ignore all 
non-alphanumeric characters. If you wish, you may simplify things 
by calling the isPalindrome function you wrote in the previous exercise.
*/

/*
- clean string
  - remove all non-alphanumeric 
  - lower or up the case
*/

function isPalindrome(string) {
  let stringReverse = string.split('').reverse().join('')
  return string === stringReverse;
}

function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return isPalindrome(string);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false


/*
function removeNonLetterNumbers(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}
*/