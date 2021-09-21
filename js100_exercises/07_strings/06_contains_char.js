/*
Write code that checks whether the string byteSequence contains 
the character x.
*/

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));

// Further Exploration:
// Implement the functionality of String.prototype.includes() yourself.
function contains(char, string) {
  let strLength = string.length;
 
  for (let i = 0; i < strLength; i += 1) {
    let currChar = string.charAt(i);
    if (currChar === char) return true;
  }
  return false;
}

console.log(contains('A', byteSequence));