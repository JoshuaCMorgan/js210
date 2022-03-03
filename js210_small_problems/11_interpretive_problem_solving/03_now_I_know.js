/*
-- Process: 
  - Input: string of letters, case-sensative
  - Output: boolean
    - based upon whether or not there exists two letters
      in work that can be found in a single spelling block.
  - Model the problem:
  - Rules
    -  True conditions for words that can be spelled with blocks.
      - Only on letter can be used (not both)
      - A block can be used only once (not more than once) 
    - spelling blocks 
      - 13 in total
      - contain two letters, upper case

  

-- Examples/Test Cases: (generic/edge)

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('DoG'); // 
isBlockWord('aPPle'); // 
isBlockWord('APPLE');  //


-- Data structure:

-- Algorithm:
create const block
create array to house which spelling blocks have been used

evaluate each letter of word (iterate)
  identify which nested array contains the current letter.
  - check if used block contains current index of spelling block
  - if so, return false
  - else place index of nested array in used block 

return true if no block was used more than once. 
-- Code:
*/
const spellBlock = [['B','O'], ['X','K'], ['D','Q'], ['C','P'], ['N','A'],
                    ['G','T'], ['R','E'], ['F','S'],  ['J','W'], [ 'H','U'],
                    ['V','I'], ['L','Y'], ['Z','M']]

function getBoxIndex(letter) {
  return spellBlock.findIndex(block => block.includes(letter))
}



function isBlockWord(word) {
  let usedBlocks = []
  let wordCap = word.toUpperCase();
 
  for (let index = 0; index < wordCap.length; index += 1) {
    let blockIndex = getBoxIndex(wordCap[index]);

    if (usedBlocks.includes(blockIndex)) {
      return false;
    } 

    usedBlocks.push(blockIndex);
    
  }
  return true;
}
console.log(isBlockWord("BO")); // false
console.log( isBlockWord('BATCH'));      // true
console.log( isBlockWord('BUTCH'));      // false
console.log( isBlockWord('jest'));       // true
console.log( isBlockWord('DoG')); // 
console.log( isBlockWord('aPPle')); // 
console.log( isBlockWord('APPLE'));  //