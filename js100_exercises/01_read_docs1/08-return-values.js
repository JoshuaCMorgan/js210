//Consider the following code snippet:

let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

//What will the following statements return?

typeof tweet; // tweet references a string literal data type
typeof words; // words references an array, which is an 'object' data type
typeof isValid; //isValid references a boolean literal



