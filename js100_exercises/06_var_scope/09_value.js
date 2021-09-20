// What will the following code log to the console and why?
// Don't run it until you have tried to answer.

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

/*
We are not declaring any parameters. So, we are reassigning varaible 'a'
to the value of 2 on line 7.  But, since constants are assigned only once,
line 7 will cause a TypeError to occur.
*/
