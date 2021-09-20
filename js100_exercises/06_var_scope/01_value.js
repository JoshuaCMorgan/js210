// What will the following code log to the console and why? 
// Don't run it until you have tried to answer.

console.log(greeting);

var greeting = 'Hello world!';

/*
 variables declared with var will be hoisted.
 But the variable is not assigned to string value until
 line 6.  Until then, it is declared and initialized with 
 the value of undefined. 
*/