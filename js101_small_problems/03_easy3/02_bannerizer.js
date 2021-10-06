/*
Write a function that will take a short line of text, and write it to the console log
within a box.
*/

function logInBox(string) {
  string = string.substring(0, 70);
  let border = `+-${'-'.repeat(string.length)}-+`;
  let space = `| ${' '.repeat(string.length)} |`;
  let text = `| ${string} |`;
  
  console.log(border);
  console.log(space);
  console.log(text);
  console.log(space);
  console.log(border);
 
}
logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('12345678901234567891123456789212345678931234567894123456789512345678961234567897')