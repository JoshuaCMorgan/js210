/*
One of the ways to manage the flow of a program is through the use of
conditionals. Go over the code below and specify how many unique
execution paths are possible.
*/

if (condition1) {
  // ...
  if (condition2) {

  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

// if conditional1 >> if conditional2
// if conditional1 >> if not conditional2
// if not conditional1 >> (else)
// If not conditional1 >> if conditional4
// If not conditional1 >> if conditional4 >> if conditional5