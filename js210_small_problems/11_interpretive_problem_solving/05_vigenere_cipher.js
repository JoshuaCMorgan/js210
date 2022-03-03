/*
-- Process: 
  - Input: text with characters multitype
  - Output:  encrypted text using polyalpha substitution
  - Model the problem:
  - Rules
    - shift value is shifting and revolving according to letters of given word
    'abc' => '012' 
    - shift value equal to index of letter in alphabet
    - shift value changes with characters only. 

-- Examples/Test Cases: (generic/edge)

-- Data structure:

-- Algorithm:
  - catalog all keys 
    - index value of alphabet list
      'abcd'
      [0, 1, 2, 3]
  - set keyIndex at 0
  - iterate through string
    if a letter
      get keyValue
        - if keyIndex is greater than equal size of array (4)
        reset keyIndex to zero
      assign key to value at array keyIndex 
      increase keyIndex by 1
    if uppcase, then encrypt upper letter
      supply key, supply upper/lower, supply char
    if lowercase, then ecrypt lower letter
      supply key, supply upper/lower, supply char

-- Code:
*/
function vigenereCipher(string, keyword) {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
  let keys = keyword.toLowerCase().split('').map(letter => alphabet.indexOf(letter));
  
  let encryptedText = "";
  let keyIndex = 0;
  let key;
  string.split('').forEach(char => {
   if (/[a-z]/i.test(char)) {
     if (keyIndex >= keyword.length) {
       keyIndex = 0;
     }
     key = keys[keyIndex];
     keyIndex += 1;
   }

   if (char >= 'A' && char <= 'Z') {
     encryptedText += encryptLetter(char, key, 'upper');
   } else if (char >= 'a' && char <= 'z') {
    encryptedText += encryptLetter(char, key, 'lower');
   } else {
     encryptedText += char;
   }
  })

  return encryptedText;
}

function encryptLetter(letter, key, letterCase) {
  const base = letterCase === 'upper' ? 65 : 97;
  let charCode = letter.charCodeAt(0) - base;
  let shiftKey = (charCode + key) % 26;
  return String.fromCharCode(shiftKey + base);
}

console.log(vigenereCipher('P', 'm'));
console.log(vigenereCipher('Pi', 'me'));
console.log(vigenereCipher('Pi', 'meat'));
console.log(vigenereCipher('Pineapple', 'meat'));
console.log(vigenereCipher("Pineapples don't", 'meat'));
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'MEat'))
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat'))
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'Aa'))

