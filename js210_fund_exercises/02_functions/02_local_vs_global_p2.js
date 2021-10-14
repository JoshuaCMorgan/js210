/*
What will the following code log to the console and why? 
Don't run the code until after you have tried to answer.
*/

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

//  Local variables have priority over outer variables. 
// it may be worth adding that we are declaring a new variable rather than 
// reassigning it.  
// If we drop var keyword and place console.log on line 13, we would get 
// a different result.

