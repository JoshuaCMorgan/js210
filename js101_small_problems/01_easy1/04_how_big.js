let readlineSync = require('readline-sync');
const SQMETERS_TO_FEET = 10.7639;

console.log('Enter the length of the room in meters: ');
let length_meters = readlineSync.prompt();
lengthMeters = parseInt(length_meters, 10);

console.log('Enter the width of the room in meters: ');
let widthMeters = readlineSync.prompt();
widthMeters = parseInt(widthMeters, 10);

let areaInMeters = (lengthMeters * widthMeters);
let areaInFeet = (areaInMeters * SQMETERS_TO_FEET);

response = `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
console.log(response);
