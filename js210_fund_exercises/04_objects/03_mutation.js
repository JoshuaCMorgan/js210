/*
What will the following code log to the console and why? 
Don't run the code until after you have tried to answer.
*/

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
console.log(array1);
/*
We reassign the string element starting with capital 'C' to all uppercase.
Since this reassigns, there is no affect on array2
*/

const array3 = [
  {name: 'Moe'}, {name: 'Larry'}, {name: 'Curly'}, {name: 'Shemp'} 
];
const array4 = [];

for (let i = 0; i < array3.length; i += 1) {
  array4.push(array3[i]);
}

array3[0].name = 'Joe';
console.log(array4);


