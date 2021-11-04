/*
Write a function that takes a string argument and returns a new string that contains
the value of the original string with all consecutive duplicate characters collapsed
into a single character.
*/

// function crunch(string) {
//   let newString = '';

//   for (index = 0; index < string.length; index += 1) {
//     if (index < 1 || newString[newString.length - 1] === string[index]) {
//       continue;
//     } else {
//       newString += string[index];
//     }
//   }
//     console.log(newString);
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // 

let rgx = /(.)$1+/g
console.log(rgx.exec('daaaailllly'));
