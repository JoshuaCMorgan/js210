/*
Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the non-alphabetic
characters replaced by spaces. If one or more non-alphabetic characters occur in a row,
you should only have one space in the result (i.e., the result string should never have
consecutive spaces).
*/

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}


function cleanUp(string) {
  let cleanString = '';


  for (index = 0; index <= string.length; index++) {
    if (isUpperCaseLetter(string[index]) || isLowerCaseLetter(string[index])) {
      cleanString += string[index];
    } else if (cleanString[cleanString.length - 1] !== ' ') {
      cleanString += ' ';
    }
  }
 return cleanString
}

cleanUp("---what's my +*& line?");    // " what s my line "

// or 

function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}