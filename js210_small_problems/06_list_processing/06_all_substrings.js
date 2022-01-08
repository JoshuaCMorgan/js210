/*
Write a function that returns a list of all substrings of a string. Order the 
returned list by where in the string the substring begins. This means that all 
substrings that start at index position 0 should come first, then all substrings 
that start at index position 1, and so on. Since multiple substrings will occur at 
each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous 
exercise:

loop through each character, extracting the the first.
  let letter = n
  push letter to resutls
  loop through remaining characters of string
    let loopLetter = n
    concatenate with loopLettter and extracted letter
    push to results

*/

const leadingSubstrings = function(string) {
  return [...string].map((_, idx) => string.slice(0, idx + 1));
}

const substrings = function(string) {
  return [...string].flatMap((_, index) => leadingSubstrings(string.slice(index)));
}
console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]