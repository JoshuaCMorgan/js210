// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

// 'a' is a global variable since it is not bound by any code block.
// and we don't declare a variable with the same name inside the
// the block of the function. So, 'a' will be logged.

// pg 204 from JavaScript
let scope = "global scope"; // A global variable

function checkscope() {
  let scope = "local scope"; // A local variable
  function f() { return scope; } // Return the value in scope here
  return f();
}

console.log(checkscope()); // local scope
