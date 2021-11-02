/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number
on a separate line.
*/

function oddNums(start, stop) {
  if (start % 2 === 0) {
    start += 1;
  }
  for (count = start; count <= stop; count += 2) {
    console.log(count);
  }
}

oddNums(3, 5);
oddNums(6, 21);