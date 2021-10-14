/*
What will the following code log to the console and why? 
Don't run the code until after you have tried to answer.
*/

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// Well, here is that different result.
// we are reassigning the variable we declared on line 6.