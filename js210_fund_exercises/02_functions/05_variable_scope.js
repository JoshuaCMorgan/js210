/*
What will the following code log to the console and why? 
Don't run the code until after you have tried to answer.
*/

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// We don't have a declaration.  JS will 'default' (my word) in this case.
// It will bind the variable to the global object as a property. 