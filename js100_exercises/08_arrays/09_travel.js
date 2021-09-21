/*
The destinations array contains a list of travel destinations.

Write a function that checks whether or not a particular destination is
included within destinations, without using the built-in method Array.
prototype.includes().

For example: When checking whether 'Barcelona' is contained in
destinations, the expected output is true, whereas the expected output for 'Nashville' is false.
*/

function contains(element, list) {
  return list.indexOf(element) >= 0;
}

 // Or 
function contains(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}


let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false