let rlsync = require('readline-sync');

let str_address = rlsync.question("Enter your street address: \n");
let city = rlsync.question("Enter your city: \n");
let zip_code = rlsync.question("Enter your zipcode: \n");
let state = rlsync.question("Enter your state: \n");

console.log('Your address: ');
console.log(`${str_address}`);
console.log(`${city} ${state}, ${zip_code}`);
