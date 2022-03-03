
/*
-- Process: 
  - Input:
    - string of characters of any type: number, spaces, etc
    - number: shift value / key
      - number of shifts right 
      - used to decode/encode text
  - Output: 
    - string
      - encoded/decoded message
  - Model the problem:
  - Rules
    - two types of shifts
      - shift value under length 26 (doesn't exeed alphabet)
      - shift value over length 26 (exceeds alphabet)
    - shift value substitution
      - simple shift
      - number of characters from current letter position
        3 ABCDEFGHIJKLMNOPQRSTUVWXYZ
        = DEFGHIJKLMNOPQRSTUVWXYZABC
      -wrap around
        - always take shift value modulo 26
        - 27 % 26 = 1
        27 ABCDEFGHIJKLMNOPQRSTUVWXYZ
      shift value character
        - value of character code for char plus 3
          - get key modulo 26 for index
        - get character code of current letter add 3
  

-- Examples/Test Cases: (generic/edge)

-- Data structure:

-- Algorithm:

  - iterate all char values
    if char not alpha, then put in final result
    if current value is alpha character
      then find shift value character
        put in final result

-- Code:
*/
function caesarEncrypt(string, key) {
  let adjustedKey = key % 26;
  const UPPER_A = 'A'.charCodeAt(0);
  const LOWER_a = 'a'.charCodeAt(0)

  let result = [];

  string.split('').forEach(char => {
    let upperChar = char.toUpperCase();
    if (/[a-z]/i.test(char)) {
      let encryptedLetterUTFNum = (upperChar.charCodeAt(0) + adjustedKey)
      if (encryptedLetterUTFNum > 90)  {
        encryptedLetterUTFNum = encryptedLetterUTFNum % 91 + 65;
      };
      let encryptedLetter = String.fromCharCode(encryptedLetterUTFNum);
      if (/[a-z]/.test(char)) {
        encryptedLetter = encryptedLetter.toLowerCase();
      }
      result.push(encryptedLetter)
    } else {
      result.push(char)
    }
  })
  result = result.join('')
  console.log(result)
}

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
 caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
 caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
 // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"