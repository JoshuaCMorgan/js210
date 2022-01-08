/*
Write a function that takes a grocery list in a two-dimensional array and returns a 
one-dimensional array. Each element in the grocery list contains a fruit name and a number that 
represents the desired quantity of that fruit. The output array is such that each fruit name 
appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array 
that contains 3 apples, 1 orange, and 2 bananas.
*/

/*
  input: two-dimensional array
    - 2 element subarray: word, integer
  
  output: one-dimensional array of string elements

  set result to empty array
  loop length of subarray
    loop from 1 up to length of number value in array
      push string value to results array

  return results
*/

function buyFruit(fruitsList) {

  return fruitsList.map(fruit => repeat(fruit))
                   .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruit) {
  const result = [];

  for (let i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }

  return result;
}

// Recursion
const buyFruit = pairs => {
  if (!pairs.length) return [];
  const repeat = pair => {
    if (pair[1] === 0) return [];
    return [ pair[0], ...repeat ([ pair[0], pair[1] - 1]) ];
  };
  return [ ...repeat(pairs[0]), ...buyFruit(pairs.slice (1)) ];
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]