/*
The following code keeps looping forever. (You can hit Ctrl-C to stop it.)
Why is that? Also modify it so that it stops after the first iteration.
*/

// for (let i = 0; ; i += 1) {
//   console.log("and on");
// }

for (let i = 0; ; i += 1) {
  console.log('and on');
  if (i === 10) {
    break;
  }
}

// or

for (let i = 0; i < 10; i += 1) {
  console.log('and on');
}
