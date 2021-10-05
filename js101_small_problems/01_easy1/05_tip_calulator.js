/*
Create a simple tip calculator. The program should prompt for a bill amount
and a tip rate. The program must compute the tip, and then log both the tip
and the total amount of the bill to the console. You can ignore input
validation and assume that the user will enter numbers.

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/

let readlineSync = require('readline-sync');

console.log('What is the bill?');
let bill = parseFloat(readlineSync.prompt());

console.log('What is the tip percentage?');
let percentage = parseFloat(readlineSync.prompt());

let tip = (percentage / 100) * bill;
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);



