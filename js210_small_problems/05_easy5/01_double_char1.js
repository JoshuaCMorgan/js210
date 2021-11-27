/*
Write a function that takes a string, doubles every character in the string,
and returns the result as a new string.
*/
function repeater(string) {
  const stringArray = [];

  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i], string[i]);
  }

  return stringArray.join('');
}

function repeater(text) {
  let repeated = '';
  for(const letter of text) {
    repeated += letter.repeat(2);
  }
  return repeated;
}
aaa

function repeater(string) {
  return string.replace(/(.)/g, '$1$1');
}
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""