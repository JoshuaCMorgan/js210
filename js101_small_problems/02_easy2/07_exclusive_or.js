/*
The || operator returns a truthy value if either or both of its operands are truthy, a
falsey value if both operands are falsey. The && operator returns a truthy value if
both of its operands are truthy, and a falsey value if either operand is falsey. This
works great until you need only one, but not both, of two conditions to be truthy: the
so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and
returns true if exactly one of its arguments is truthy, false otherwise. Note that we
are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
*/

// If first is true and second true, return false
// if first is true and second false, return true
function xor(firstArg, secondArg) {
  if ((firstArg && secondArg)) {
    return false; 
  } else if ((firstArg || secondArg) && (firstArg && secondArg)) {
    return false;
  } else return true;
} 

/*
alternative
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}
*/
 console.log(xor(5, 0) === true);
 console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
 console.log(xor(true, true) === false);



 