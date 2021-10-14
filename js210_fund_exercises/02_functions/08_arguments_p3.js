/*
What will the following code log to the console and why? 
Don't run the code until after you have tried to answer.
*/

let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// Arrays are mutable and 'b' is assigned to the same object that 'a' is assigned.
// So, when you manipulate 'b', you are manipulating 'a'.