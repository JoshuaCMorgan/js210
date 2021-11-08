/*
Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

Copy Code
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
Copy Code
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

let integer;
let question;
let readlineSync = require('readline-sync');

function sum(number) {
  let total = 0;
  
  for (let initial = 1; initial <= number; initial +=1) {
    total += initial;
  }

  return total;
}

function product(number){
  let total = 1;

  for (let initial = 1; initial <= number; initial +=1) {
    total *= initial;
  }

  return total;
}

function askQuestion(){
  if (question) console.log('please enter a valid entry');

  console.log(`Enter "s" to compute the sum, or "p" to compute the product.`);
  question = readlineSync.prompt()

  if (question) return question;
}

while (integer < 1 || integer === undefined ) {
  console.log('Please enter an integer greater than 0:');
  integer = parseInt(readlineSync.prompt(), 10);

  if (integer > 0) break;
  
  console.log('invalid entry')
}

while (question !== 's' && question !== 'p') askQuestion();

if (question === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${sum(integer)}.`)
} else {
  console.log(`The product of the integers between 1 and ${integer} is ${product(integer)}.`)
}
