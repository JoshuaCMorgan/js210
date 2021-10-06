/*
Write a function that takes a string argument and returns a new string that contains
the value of the original string with all consecutive duplicate characters collapsed
into a single character.
*/

function crunch(string) {
  let newString = ''
  
  for (let index = 0; index <= string.length; index++) {
    if (string.charAt(index - 1) !== string.charAt(index)) {
      newString += string.charAt(index);
    }
  }

  
  return newString;
}

// or

string.split('').filter(function(letter, index) {
  return string.charAt(index - 1) !== letter;
}).join('');

console.log(crunch('ddaaiillyy ddoouubbllee') ===  "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === 'g');
console.log(crunch('a') === 'a');
console.log(crunch('') === '');