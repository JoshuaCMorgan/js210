/*
Write a program that asks the user to enter an integer greater than 0, then
asks whether the user wants to determine the sum or the product of all
numbers between 1 and the entered integer, inclusive.
*/


function sumOfNumbers(targetNumber) {
  let sum = 0;
  let number = 1;
  
  while (number <= targetNumber) {
    sum += number;
    number += 1;
  }
  
  return sum;
}

function productOfNumbers(targetNumber) {
  let product = 1;
  
  for (let num = 1; num <= targetNumber; num++) {
    product *= num;
  }
  
  return product;
}

let readlineSync = require('readline-sync');

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

switch (operation) {
  case 'p':
    let product = productOfNumbers(number);
    console.log(`The product of the integers between 1 and ${number} is ${product}.`);
    break;
  case 's':
    console.log(number);
    let sum = sumOfNumbers(number);
    console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
    break;
  default:
    console.log('response must be s or p.');
}
