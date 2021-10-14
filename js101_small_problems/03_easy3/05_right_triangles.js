/*
rite a function that takes a positive integer, n, as an argument and logs a right
triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal
side in the images below) should have one end at the lower-left of the triangle, and
the other end at the upper-right.
*/

function triangle(height) {
  let star = '*';
  let space = ' '
  let spaces = height - 1;
  let stars = 1;
  let line;


  while (stars <= height) {
    line = (space.repeat(spaces) + star.repeat(stars));
    console.log(line);
    spaces -= 1;
    stars += 1;
  }
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