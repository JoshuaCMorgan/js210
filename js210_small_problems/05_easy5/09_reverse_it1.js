/*
Write a function that takes a string argument and returns a new string containing 
the words from the string argument in reverse order.
*/

function reverseSentence(string) {
  let words = string.split(' ');
  return words.reverse().join(' ');
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"