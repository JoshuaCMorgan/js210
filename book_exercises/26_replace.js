let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr.forEach(function (subarray) {
  subarray = ['New object'];
  console.log(subarray);
});

console.log(arr);