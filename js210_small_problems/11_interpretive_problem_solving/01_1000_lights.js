/*
-- Process: 
  - Input: number
    - represents the number of switches
  - Output: 
    - array which represents which lights are on.
  - Model the problem:
  - Rules
    - The number of passes through the bank is equal to the number
      of lights
    - number indicating round is the number of intervals of light position
     to operate on.
      1 - interval is every 1
      2 - every 2nd
      3 - every third 
    - switch mechanism
      - on to off, off to on
    - starting position is all off
  
[ false, false, false, false, false, false]
round 1: [ true, true, true, true, true, true]
round 2: [ true, false, true, false, true, false]
round 3: [ true, false, false, false, true, true]
round 4: [ true, false, false, true, true, true]
round 5: [ true, false, false, true, false, true ]
round 6: [ true, false, false, true, false, false ]
-- Examples/Test Cases: (generic/edge)

lightsOn(1) // [1]
lightsOn(2) // [1]
lightsOn(3) // [1]
lightsOn(5) // [1, 4]
lightsOn(6) // [1, 4]
lightsOn(100) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

-- Data structure:


-- Algorithm:
create bank array size of input and fill with false values

iterate over bank a num of times equal to input number.
  - operate on interval position only
    - if false then true, vice-versa

-- Code:
*/


function lightsOn(switches) {
  let bank = new Array(switches).fill(false);
  
  for (let interval = 1; interval <= switches; interval += 1) {
    for (let idx = interval - 1; idx < switches; idx += interval) {
      bank[idx] = bank[idx] === false ? true : false;
    }
  }

  let switchesOn = []
  bank.forEach((lightSwitch, index) => {
    if (bank[index] === true) {
      switchesOn.push(index + 1)
    }
  })
  console.log(switchesOn)
};

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
lightsOn(2) // [1]
lightsOn(3) // [1]
lightsOn(5) // [1, 4]
lightsOn(6) // [1, 4]
lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]