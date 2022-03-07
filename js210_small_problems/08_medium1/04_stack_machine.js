/*
-- Process: 
  - Input: a string 
    - a small stack-and-register program argument


  - Output: result of each command operation from string program
  - Model the problem:
  - Rules
    - a single program command will consist of 
      - a single operation
        - push, sub, mult, div, remainder, pop, print
      - a numeric value
        - ex: 35, 4, 5,
    - all operations relate to
      - value in register
      - rightmost value of stack.
    - Actions taken for particular operation given in instructions. 
      - if n, or print
         - act upon value in register
      - if push, add, sub, mult, div, remainder, pop
        - act upon stack and register
  


-- Examples/Test Cases: (generic/edge)

-- Data structure:

-- Algorithm:
  - set register to zero
  - set stack to empty array.
  - split input by space, which will become commands
  - iterate through list of operations/commands
    - switch between commands based upon case of command
    - 
    

-- Code:
*/

function minilang(operations) {
  let register = 0;
  let stack = [];
  let commands = operations.split(' ');

  commands.forEach(token => {
    switch(token) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER': 
        register = Math.floor(register % stack.pop());
        break;
        case 'PRINT':
          console.log(register);
          break;
      default:
        register = parseInt(token, 10);
    }
  })
}

console.log('PRINT')
minilang('PRINT');
console.log(' ')
// // 0

console.log('5 PUSH 3 MULT PRINT');
minilang('5 PUSH 3 MULT PRINT');
console.log('')
// 15

console.log('5 PRINT PUSH 3 PRINT ADD PRINT')
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
console.log('')
// 5
// 3
// 8
console.log('5 PUSH POP PRINT')
 minilang('5 PUSH POP PRINT');
 console.log('');
// // 5

console.log('5 PUSH 3 POP PRINT')
minilang('5 PUSH 3 POP PRINT');
console.log('')
// 5

console.log('3 PUSH 7 DIV PRINT');
minilang('3 PUSH 7 DIV PRINT');
console.log('')
// 2

console.log('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
 minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
 console.log('')
// 5
// 10
// 4
// 7

console.log('3 PUSH PUSH 7 DIV MULT PRINT')
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
console.log('');
// 6

minilang('4 PUSH 7 REMAINDER PRINT')
// 3
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

 minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)