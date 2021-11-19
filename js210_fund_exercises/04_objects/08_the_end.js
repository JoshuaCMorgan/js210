/*
The penultimate function takes a string as an argument and returns the next-to-last word in
the string. The function assumes that "words" are any sequence of non-whitespace characters. 
The function also assumes that the input string will always contain at least two words. The 
penultimate function in the example below does not return the expected result. Run the code 
below, check the current result, identify the problem, explain what the problem is, and 
provide a working solution.
*/


function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

penultimate('last word');                  // expected: "last"
penultimate('Launch School is great!');    // expected: "is"

/*
it returns undefined since we are using negative numbers.
string.split(' ').slice(-2, 1)[0]
this will extract an offset of 2 from the end up to but not including offset of 1.
So, it will slice the second to last up to but not including the last.
Then to return the string element  in the array, we can reference its index.
*/