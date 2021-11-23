/*
Read through the following code. Currently, it does not log the expected result.
Explain why this happens, then refactor the code so that it works as expected.
*/

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

/*
JS will create a new object for every object literal. 


const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // true
*/