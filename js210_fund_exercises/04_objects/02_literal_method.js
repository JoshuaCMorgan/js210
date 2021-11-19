/*
In the following code, a user creates a person object literal and defines two
methods for returning the person's first and last names. What is the result when
the user tries out the code on the last line?
*/

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

// Written this way, JS is assuming you want the value of the property.
// In this case, JS will return the whole function as-is. 
// To call a function, parentheses are still necessary.