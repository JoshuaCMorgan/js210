/*
Write a function that takes a positive integer, n, as an argument and logs
a right triangle whose sides each have n stars. The hypotenuse of the
triangle (the diagonal side in the images below) should have one end
at the lower-left of the triangle, and the other end at the upper-right.
*/

/*
stars start with 1 up to integer, right side
spaces start with 4 down to zero
base/height are integer length

set star variable to '*'
set space to empty string.
for loop integer times
 repeat stars count times
*/

function triangle(height) {
  let stars = 1;
  let spaces = height - 1

  for (count = 0; count < height; count += 1) {
    let line = `${repeatChars(' ', spaces)}${repeatChars('*', stars)}`;
    console.log(line);
    stars += 1;
    spaces -= 1;
  }
}

function repeatChars(char, times) {
  let charRepeat = ''

  for (let count = 0; count < times; count += 1) {
    charRepeat +=  char;
  }

  return charRepeat;
}
triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********