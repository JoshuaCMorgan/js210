/*
What does the following code log? Why is this so?
*/

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

/*
will log 40 and 45, 
functions have the quality of closure, so they remember their environment at creation,
which they reference if need be. In this case, startingBalance does not have
the value of 1, but will be looked up each time the function is called.
*/