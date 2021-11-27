/*
Write a function that takes a string argument consisting of a first name, a space, 
and a last name, and returns a new string consisting of the last name, a comma, a 
space, and the first name.
*/


function swapName(name) {
  let fullName = name.split(' ');
  let first = fullName.slice(0, -1).join(' ');
  let last = fullName[fullName.length - 1];
 
  return last + ', ' + first;
}


console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karen Rose Morgan'));

/*
function swapName(name) {
  nameArray = name.split(' ');
  return nameArray.pop() + ', ' + nameArray.join(' ');
}
*/