/*
What will the following code log to the console and why? 
Don't run the code until after you have tried to answer.
*/

let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// the parameter a is a new variable that is local to the function.
// So, we have two variables with the same name. 