/*  
In this exercise, you will write a program that asks the user for a
phrase, then outputs the number of characters in that phrase. Go over the
documentation for String to find an appropriate method to use.

Examples:

Please enter a phrase: walk
// console output
There are 4 characters in "walk".

Please enter a phrase: walk, don't run
// console output
There are 15 characters in "walk, don't run".
*/



const readlineSync = require('readline-sync');
let phrase = readlineSync.question('Please enter a phrase: ');

console.log(`There are ${phrase.replace(/[^a-zA-Z0-9]/g, '').length} characters in "${phrase}".`);