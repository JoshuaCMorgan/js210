/*
Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
*/

function penultimate(string) {
  let wordsArray = string.split(' ');
  return wordsArray[wordsArray.length - 2];
}
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
Our solution ignored a couple of edge cases because we explicitly stated that you
didn't have to handle them: strings that contain just one word, and strings that
contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence. What
edge cases need to be considered? How would you handle those edge cases without
ignoring them? Write a function that returns the middle word of a phrase or sentence.
 It should handle all of the edge cases you thought of.
*/

function middleWord(string) {
  let wordsArray = string.trim().split(' ');
  let middleIndex = parseInt(wordsArray.length / 2);

  if (wordsArray.length <= 1) {
    return 'n/a: string contains one world or less'
  } else if (wordsArray.length % 2 === 0) {
    return wordsArray[(middleIndex - 1)] + ' ' + wordsArray[middleIndex];
  } else {
    return wordsArray[middleIndex];
  }
}

console.log(middleWord('This is a test.') === 'is a');
console.log(middleWord('Here we go!') === 'we');