/*
What will the following code log to the console and why? 
Don't run the code until after you have tried to answer.
*/

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);  // 'a'
console.log(myArray[-1]);  // indexes are non-negative integers, so 'undefined'

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd', since we set '-1' to 'd'
console.log(myArray['e']); // 5
console.log(myArray);  // ['a', 'b', 'c', 'f', '-1': 'd', e: 5 ]
