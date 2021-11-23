/*
Read through the code below.
What values will be logged to the console? Can you explain these results?
*/

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // returns array object
console.log(languages.length); // returns 3

languages.length = 4;
console.log(languages);      // mutates array by adding 1 empty element
console.log(languages.length); // 4, because of the mutation.

 languages.length = 1;
 console.log(languages);    // mutates the array by reducing it to the first element.
 console.log(languages.length); // 1

languages.length = 3;
console.log(languages);       // mutates array by adding 2 empty items.
console.log(languages.length); // 3

languages.length = 1;         // mutates by reducing to first element
languages[2] = 'Python';      // mutates by adding 1 empty item and 1 string element
console.log(languages);       // returns array 
console.log(languages[1]);   // returns undefined
console.log(languages.length); // returns 3