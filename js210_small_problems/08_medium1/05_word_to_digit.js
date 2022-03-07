/*
-- Process: 
  - Input: 'sentence string'
    - includes number words and other characters of different types.
    - number words are those zero to nine.
    - number words will be lowercase. 
  - Output: the sentence string with 'number word' converted to corresponding digit.
  - Model the problem:
  - Rules
    - a number word is a string of consecutive alpha characters 
      not surrounded by other alpha characters.
        - but could be surround by other character types
    
  

-- Examples/Test Cases: (generic/edge)
// number word is converted to digit
wordToDigit('four'); // 4

// only number words changed, keeping other chars unchanged
wordToDigit('zero one two'); // "0 1 2"

wordToDigit('Hello number four.'); // "Hello number 4."

wordToDigit('Hello #four!'); // "Hello #4!"

// number words surrounded by other alphchars won't convert number.
wordToDigit('four hencefourth'); // "4 hencefourth"


// wordToDigit('Hello number four.'); //
// wordToDigit('Hello number four.'); //
// wordToDigit('Hello number four.'); //

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
-- Data structure:

-- Algorithm:
  - create array with number words correlated with index
  - split string by word boundaries to get individual words and iterate
    - replace space character with empty string.
    - if array includes curent word, replace with index.

-- Code:
*/
const toDigit = (word) => {
  return ['zero', 'one', 'two', 'three',
  'four', 'five', 'six', 'seven',
  'eight', 'nine'].indexOf(word.toLowerCase());
}

function wordToDigit(text) {
  const regex = /\b(zero|one|two|three|four|five|six|seven|eight|nine)\b/gi
  return text.replace(regex, toDigit);
}

// number word is converted to digit
 wordToDigit('four'); // 4

// only number words changed, keeping other chars unchanged
 wordToDigit('zero one two'); // "0 1 2"

wordToDigit('Hello number four.'); // "Hello number 4."

wordToDigit('Hello #four!'); // "Hello #4!"

// number words surrounded by other alphchars won't convert number.
wordToDigit('four hencefourth'); // "4 hencefourth"


// wordToDigit('Hello number four.'); //
// wordToDigit('Hello number four.'); //
// wordToDigit('Hello number four.'); //

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."