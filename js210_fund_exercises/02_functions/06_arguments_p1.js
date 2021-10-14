/*
What will the following code log to the console and why? 
Don't run the code until after you have tried to answer.
*/


let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// numbers are primitive values, which cannot change. 
// in these cases, variables are points. So, b is pointing to 7, then it
// is point to 17.  a is still pointing to 7.