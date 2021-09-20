const myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

const evenOdd = myArray.map((value) => {
  if (value % 2 === 0) {
    return 'even';
  }
  return 'odd';
});

console.log(evenOdd);
// [
//   'odd',  'odd',  'even',
//   'odd',  'even', 'even',
//   'even', 'odd',  'odd',
//   'even', 'even'
// ]