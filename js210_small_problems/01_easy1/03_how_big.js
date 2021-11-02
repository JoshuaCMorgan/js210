/*
Build a program that asks the user to enter the length and width of a room in meters, and
then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method
to collect user input.

Example:

Copy Code
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

let readlineSync = require('readline-sync');
const SQUARE_MTS_TO_SQUARE_FT = 10.7639

function getMeasurement(text) {
  console.log(text);
  value = readlineSync.prompt();
  return parseInt(value, 10);
}

let length = getMeasurement('Enter the length of the room in meters: ')
let width = getMeasurement('Enter the width of the room in meters: ')

let areaInMeters = length * width;
let areaInFeet = areaInMeters * SQUARE_MTS_TO_SQUARE_FT;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)}).`);
