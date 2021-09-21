/*
Take the following rhyme:

A pirate I was meant to be!
Trim the sails and roam the sea!

How can you assign this string to a single variable, preserving the line break?
*/
let rhyme = "A pirate I was meant to be!\nTrim the sails and roam the sea!";

console.log(rhyme);

let rhyme1 = 'A pirate I was meant to be! \n\
Trim the sails and roam the sea!';

console.log(rhyme1);

let rhyme2 = `A pirate I was meant to be!
Trim the sails and roam the sea!`;

console.log(rhyme2);

let rhyme3 = 'A pirate I was meant to be! \n' +
'Trim the sails and roam the sea!';
console.log(rhyme3);