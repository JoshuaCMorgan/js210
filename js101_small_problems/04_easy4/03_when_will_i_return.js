;/*

/*
Build a program that logs when the user will retire 
and how many more years the user has to work until retirement.

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

let readlineSync = require('readline-sync')


let currentAge = readlineSync.question('What is your age? ')
let retirementAge = readlineSync.question('At what age would you like to retire? ')

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

let yearsToRetirement = retirementAge - currentAge
let retirementYear = currentYear + yearsToRetirement

let output = `It's ${currentYear}. You will return in ${retirementYear}
You have only ${yearsToRetirement} years of work to go!`
console.log(output);


