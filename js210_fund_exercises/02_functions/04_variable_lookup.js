/*
What will the following code log to the console and why? 
Don't run the code until after you have tried to answer.
*/

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// JS will will look in the local scope then in the outscore for myVar. 