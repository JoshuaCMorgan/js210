/*
The productOfSums function shown below is expected to return the product of the
sums of two arrays of numbers. Read through the following code.
Will it produce the expected result? Why or why not?
*/

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

/*
line 8, sum is set to undefined, so when sum is incremented, JS
won't know how to concat undefined with integer, producing NaN
linke 14, all functions return a value and does so with keyword
*/