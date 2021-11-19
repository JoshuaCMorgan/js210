// Identify the bug in the following code. 
// Don't run the code until after you've tried to answer.


const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]);
console.log( myObject[a]);
console.log(myObject.a);

// JS thinks [a] is a variable it needs to find and return. 
// If the operand inside the brackets is other than a string
// or a number (JS will convert number to string), it will 
// will seek out a declared variable. 