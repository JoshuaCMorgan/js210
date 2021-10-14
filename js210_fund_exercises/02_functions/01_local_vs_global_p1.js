/*
What will the following code log to the console and why? Don't run the code until after you have tried to answer.
*/

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// functions create a new scope.  And line 8 declares a new variable local to the function, which happens to have the same name as line 5.