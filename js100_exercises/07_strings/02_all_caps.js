/*  
Take the string 'confetti floating everywhere' and transform it to upper case.
*/

function upCase(string) {
  return string.toUpperCase();
}

let string = 'confetti floating everywhere';
console.log(upCase(string));

let upcase2 = function(string2) {
  return string2.toUpperCase();
};

console.log(upcase2('Goodbye'));

let upCase3 = (string3) => string3.toUpperCase();

console.log(upCase3('Hello'));
