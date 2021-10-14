/*
Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the non-alphabetic
characters replaced by spaces. If one or more non-alphabetic characters occur in a row,
you should only have one space in the result (i.e., the result string should never have
consecutive spaces).
*/

/*
evaluate each character space.
if character is upper/lower alphabet character, then put in string.
if character is other,
  evaluate last character of new string. if alpha character, put space character
  otherwise, continue.
*/

function isUpperCase(letter) {
  return letter >= 'A' && letter <= 'Z';
}

function isLowerCase(letter) {
  return letter >= 'a' && letter <= 'z';
}

function cleanUp(string) {
  let cleanText = '';

  for(index = 0; index <= string.length - 1; index += 1) {
    if (isUpperCase(string[index]) || isLowerCase(string[index])) {
      cleanText += string[index];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }
  return cleanText;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "