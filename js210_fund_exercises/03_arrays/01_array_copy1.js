// Read through the code shown below. What does it log to the console at lines 6 and 10?


let myArray = [1, 2, 3, 4];
const myOtherArray = myArray; // variable references same array in memory

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2]  //reassign variable to reference a new array at other memory location.
// reassignment doesn't change other variables referencing of original object.
console.log(myArray);
console.log(myOtherArray);