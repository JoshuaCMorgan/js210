// Given the following tweet:

let tweet = 'Starting to get the hang of it... #javascript #launchschool';

// What will the following statements evaluate to?

tweet.split(' ');
tweet.split(' ').reverse();
tweet.split(' ').reverse().join(' ');

// An array of elements, each being string of characters delimited by the 
// space. ['Starting', 'to', ...]

// The previous object but elements of array in reverse order
// ['#launchschool', '#javascript',...]

// the previous object, but now the elements have been joined 
// to make a string with a space character between the elements.