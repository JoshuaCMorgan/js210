/*
What will the following code log to the console and why? 
Don't run the code until after you have tried to answer.
*/

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

// console.log(myObject[prop2]);
// console.log(myObject.prop2);


/*
console.log(myObject[prop2]); will log '678'. the operand prop2 is an expression
that returns '456'.  This property has earlier been assigned to '678' on line 14.
console.log(myObject.prop2); will log '456' since we are accessing the property 
name prop2. It was reassigned on line 13.
*/


console.log(myObj); const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

/*
{ funcProp: 'hello, ' }
{ funcProp: 'world!' }
*/