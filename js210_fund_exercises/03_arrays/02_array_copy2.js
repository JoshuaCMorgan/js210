/*
In the previous exercise, the value of the reference gets copied. For
this exercise, only the values of the array should be copied, but not the
reference. Implement two alternative ways of doing this.
*/

let myArray = [1, 2, 3, 4];
const myOtherArray = [...myArray];

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// alternatives
const myOtherArray = myArray.map(element => element);
const myOtherArray = Array.from(myArray);
const myOtherArray = Object.assign([], myArray);