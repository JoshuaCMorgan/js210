// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

/*
We will see a change. The variable 'a' still reference the same object
Constants only make sure variables always reference the same object.
Which means that the value(s) of the object don't affect the binding.
*/
