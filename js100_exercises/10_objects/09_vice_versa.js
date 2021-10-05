/*  
Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
*/


let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = Object.fromEntries(nestedArray);
console.log(person);

// or

let person2 = {};
for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person2[pair[0]] = pair[1];
}
console.log(person2);
