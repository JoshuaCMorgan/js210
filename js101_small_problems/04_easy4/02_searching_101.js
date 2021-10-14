/*
Write a program that solicits six numbers from the user and logs a message that 
describes whether the sixth number appears among the first five numbers.

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.
*/

let readlineSync = require('readline-sync');

let numbers = [];
let ordinals = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
for (let index = 0; index <= 5; index += 1 ) {
  let number = readlineSync.question(`Enter the ${ordinals[index]} number: `);
  numbers.push(number);
}

let lastNumber = numbers[numbers.length - 1];
let firstFive = numbers.slice(0,5);

let statement;
// if (firstFive.includes(lastNumber)) {
//   statement = `The number ${lastNumber} appears in ${firstFive.join(',')}.`
//   } else {
//   statement = `The number ${lastNumber} does not appear in ${firstFive.join(',')}`
// };

function isGreaterThan20(element) {
  return element > 10;
};

let result = firstFive.some(isGreaterThan20);
if (result) {
  statement = `There numbers (${firstFive.join(', ')}) contain a number greater than 20.`
} else {
  statement `The numbers (${firstFive.join(', ')}) do not contain a number greater than 20.`
};

console.log(statement);

