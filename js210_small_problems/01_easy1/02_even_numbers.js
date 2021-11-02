/*
Log all even numbers from 1 to 99, inclusive, to the console, with each number
on a separate line.
*/

let  evenNumbers = function(startNum, stopNum) {
  if (startNum % 2 === 1) {
    startNum += 1;
  }

  console.log(startNum);
  if (startNum >= stopNum) {
    return;
  }

  evenNumbers(startNum + 2, stopNum);
}

evenNumbers(2, 6);