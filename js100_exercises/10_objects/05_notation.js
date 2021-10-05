/*
Before running any code, determine what difference there will be in the
output of the two code snippets below (if any).
*/

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

let ocean2 = {};
let prefix2 = 'Indian';

ocean2[prefix2] = 'Pacific';

console.log(ocean2); // ?

// bracket notation accepts expressions, including variables. 