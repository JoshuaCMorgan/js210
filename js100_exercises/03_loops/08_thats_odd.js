/*
Write a while loop that logs all odd natural numbers between 1 and 40.

set num var to 1
conditional that num < 40
while true, log number, skip 1
*/
let number = 1;

while (number < 40) {
  console.log(number);
  number += 2;
}

// or

let num = 1;

while (num <= 40) {
  if (num % 2 !== 0) {
    console.log(num);
  }

  num += 1;
}