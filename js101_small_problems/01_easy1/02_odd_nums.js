/*
Log all odd numbers from 1 to 99, inclusive, to the console,
with each number on a separate line.
*/

// for (num = 1; num <= 99; num += 2) {
//   console.log(num);
// }

function oddNUmbers(number) {
  let count = 1;
  while (count <= number) {
    console.log(count);
    count += 2;
  }
}

oddNumbers(85);