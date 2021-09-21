// Predict the output of the below code. When you run the code,
// do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// false, because this is strict equality and these are objects and
// not primitive values. So, JS is figuring if  both objects share 
// the same memory location.
