/*
What will the following code snippets log?
*/

// Code Snippet 1
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}
/*
will log "The total value is 15"
Althought counter is declared, JS ignores duplicates declared with var
*/

//Code Snippet 2


function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;
/*
NaN
function declarations hoist variable and body, variable declarations hoist variable only.
*/

// Code Snippet 3


var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
// logs: The total value is 15
/*
Just like code snippet 1, essentially
*/

//Code Snippet 4


let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
/*
counter is declared twice. Since let is used to declare the variable, 
we run into a syntax error when the function declares the variable with the same name.
*/
