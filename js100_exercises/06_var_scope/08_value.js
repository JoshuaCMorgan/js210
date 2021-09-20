// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

let a = 1;

function myFunction(a) {
  
  console.log(a);
}

let b = 2;

myFunction(b);

// We have created a block on lines 6-8.  blocks create a new scope.
// Parameters (and variable bindings) declared in a given scope
// are local only.  They are not global.
// So, the parameter 'a' inside the function block is assigned to
// the value that is passed in as the argument.
