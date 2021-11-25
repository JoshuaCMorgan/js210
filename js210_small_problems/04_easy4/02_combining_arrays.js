/*
Write a function that takes two arrays as arguments and returns an array containing 
the union of the values from the two. There should be no duplication of values in the 
returned array, even if there are duplicates in the original arrays. You may assume 
that both arguments will always be arrays.
*/


function copyNoDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(arr1, arr2) {
  let resultArray = [];
  copyNoDupsTo(resultArray, arr1);
  copyNoDupsTo(resultArray, arr2);
  return resultArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]