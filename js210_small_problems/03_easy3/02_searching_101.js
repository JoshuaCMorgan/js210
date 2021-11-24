/*
Write a program that solicits six numbers from the user 
and logs a message that describes whether the sixth number 
appears among the first five numbers.

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
*/
let readlineSync = require('readline-sync');

const collectNumbersFromUser = () => {
  let sequence = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
  let numbers = [];

  sequence.forEach(sequential => {
   let number =  readlineSync.question(`Enter the ${sequential} number: `)
    numbers.push(number);
  })
  return numbers;
}

function isIncluded(numbers, number) {
  return numbers.includes(number);
}

const  numbers =  collectNumbersFromUser();
const lastNumber = numbers.splice(-1)[0];

if (isIncluded(numbers, lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers.join(', ')}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers.join(', ')}.`);
}









