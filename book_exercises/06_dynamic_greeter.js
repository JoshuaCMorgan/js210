function greet(prompt) {
  let readlineSync = require('readline-sync');
  
  let name = readlineSync.question(prompt);
  return name;
};



let firstName = greet("What is your first name? \n");
let lastName = greet("What is your last name? \n");

console.log(`Hello, ${firstName} ${lastName}`);
