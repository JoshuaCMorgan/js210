/*
Go over the following program. What does it log to the console at lines 7, 11, 15, and 19? Is it what you expected? Why or why not?
*/

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');  // Will print since true is truthy
}

if (!myString) {
  console.log('World');     // Will not print since 'hello' will eventually return falsey
}

if (!!myArray) {
  console.log('World');  // Will print since the object will eventually return truthy
}

if (myOtherString || myArray) {
  console.log('!');
}
// will print since myArray will return true and meets requirement of 
// either/or