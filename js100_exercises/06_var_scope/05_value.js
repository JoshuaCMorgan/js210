// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

/*
The key to understanding this situation is the let keyword on line 9.
let will declare a variable that is block scoped. And variables
declared by let are not initialized separate from the point of
declaration.
JS will manage the inner-scope before it manages the outer-scope.
Because we are declaring a new variable 'a' on line 9, 'a' shadows
 the 'a' variable declared on line 5.
Consequently, we get a reference error.
Had there not been 'let' keyword, the code would log without error.

*/
