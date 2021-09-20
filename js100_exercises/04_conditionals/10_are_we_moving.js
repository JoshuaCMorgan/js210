/*  
Determine what the following code snippet logs. 
First solve it in your head or on paper, and only then run it 
in your JavaScript console to check the result.
*/

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);
// true
// comparison operators have higher precedence than logocal operators
// so, brakingForce < acceleration gets evaluated first
// giving us true && ...
// (speed > 0 || acceleration > 0) evalutes to true

//Bonus question: Do we need the parentheses 
// in the boolean expression or could we also have written the following?

let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
// yes, precedence matters logical and is before logical or.