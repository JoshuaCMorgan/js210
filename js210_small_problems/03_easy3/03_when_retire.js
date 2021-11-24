/*
Build a program that logs when the user will retire
and how many more years the user has to work until retirement.
*/
let rlSync = require('readline-sync');

function getInputFromUser() {
  let age = parseInt(rlSync.question('What is your age? '), 10);
  let retireAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);
  return [age, retireAge];
}

function displayRetirement(data) {
  let age = data[0];
  let retireAge = data[1];
  let today = new Date()
  let currentYear = today.getFullYear();
  let yearsToRetirement = (retireAge - age);
  let retireYear = yearsToRetirement + currentYear;
  console.log('');
  console.log(`It's ${currentYear}.  You will retire in ${retireYear}`);
  console.log(`You have only ${yearsToRetirement} years to go!`);
}

let userInput = getInputFromUser();
displayRetirement(userInput);