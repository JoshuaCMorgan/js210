/*
Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Example Output:

Teddy is 69 years old!

*/


function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(200, 120);
console.log(`Teddy is ${age} years old!`);
