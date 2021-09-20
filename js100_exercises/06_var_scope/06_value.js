// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

/*
On line 7, a new block is created.  And inside that block, we declare
a block-scoped variable 'b', which happens to shadow line 5.
Since 'let' creates block-scoped variables and outer scope can't access
variables declared in the inner scope, we get 'false' logged.
*/