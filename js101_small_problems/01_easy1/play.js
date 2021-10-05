function sumOfNumbers(integer) {
  let sum = 0;
  let number = 1;
  while (number <= integer) {
    sum += number;
    number += 1;
  }
  console.log(sum);
}

sumOfNumbers(5);