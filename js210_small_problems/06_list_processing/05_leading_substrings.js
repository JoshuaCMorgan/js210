/*
Write a function that takes a string argument and returns a list of substrings of 
that string. Each substring should begin with the first letter of the word, and the 
list should be ordered from shortest to longest.
*/

// const leadingSubstrings = function(string) {
//   let result = [];

//   for (let length = 1; length <= string.length; length += 1) {
//     result.push(string.slice(0, length)); 
//   }
//   console.log(result);
//   return result;
// }

// const leadingSubstrings = function(string) {
//   return [...string].map( (char, idx) => string.slice(0, idx + 1));
// }

const leadingSubstrings = (str, curr = "") => {
  if (!str.length) return [];
  return [ curr + str[0], ...leadingSubstrings (str.slice (1), curr + str[0]) ];
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]