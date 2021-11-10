/*
In this exercise, you will implement your own version of two Array methods:
Array.prototype.pop and Array.prototype.push. The pop method removes the last
element from an array and returns that element. If pop is called on an empty
array, it returns undefined. The push method, on the other hand, adds one or
more elements to the end of an array and returns the new length of the array.
*/
function pop(array) {
  if (array.length === 0) return undefined;
  let lastElement = array[array.length - 1];
  array.length -= 1;
  return lastElement;
}

/*
 function pop(array) {
  const poppedElement = array[array.length - 1];
  array.splice(array.length - 1);

  return poppedElement;
}
*/

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]


function push(array, ...args) {
  const length = args.length;

  for (let i = 0; i < length; i += 1) {
    array[array.length] = args[i];
  }

  return array.length;
}

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
 console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0