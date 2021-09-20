/*
What is the difference between the following two code snippets?
Check the MDN documentation on while and do...while.
*/

// This code will execute conditional expression before block.
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// This code will at least execute block once before the conditional.
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);