let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.flatten().forEach(function(currentValue) {
  if (currentValue % 2 === 0) {
    console.log(currentValue);
  }
});