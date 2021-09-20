const things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  const result = [];
  array.forEach((element) => {
    if (Number.isInteger(element)) {
      result.push(element);
    }
  });
  return result;
}

// Or

function findIntegers(array) {
  return array.filter((element) => Number.isInteger(element));
}

const integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
