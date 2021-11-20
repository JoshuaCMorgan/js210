/*
The following program is expected to log each number between 0 and 9
(inclusive) that is a multiple of 3. Read through the code shown below.
Will it produce the expected result? Why or why not?
*/

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

/*
No, the block inside if condition doesn't increment the the variable i. 

*/

/*
// solution 1
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }

  i += 1;
}


// solution 2
for (let i = 0; i < 10; i += 1) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
*/