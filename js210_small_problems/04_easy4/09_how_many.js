/*
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.
*/

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];


function countOccurrences(array) {
  let resultObject = {};
  
  array.forEach(value => {
    if (!resultObject[value]) {
      resultObject[value] = 1;
    } else resultObject[value] += 1;
  })
  
  for (const [key, value] of Object.entries(resultObject)) {
    console.log(`${key} => ${value}`);
  }
  
}
countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2