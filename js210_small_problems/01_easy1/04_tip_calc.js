/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers.

Example:

Copy Code
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/
let readlineSync = require('readline-sync');

function getBillTip(text) {
  let answer = readlineSync.question(text);
  return parseFloat(answer);
}

let billTotal = getBillTip('What is the bill? ');
let tipPercencent = getBillTip('What is the tip percent? ');

let tipAmount = billTotal * (tipPercencent / 100);
let billAmount = billTotal + tipAmount;
console.log(`The tip is $${tipAmount.toFixed(2)} \nThe total is $${billAmount.toFixed(2)}`);