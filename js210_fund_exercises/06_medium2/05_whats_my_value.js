/*
What will the following program log to the console? Can you explain why?
*/

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges'; // this creates a proprerty key/value pair

 console.log(array.length); // will be 3, since only elements are counted
 console.log(Object.keys(array).length);  // will be 4, since all enumerable properties are considered

 array[-2] = 'Watermelon'; // this creates new property key/value pair
console.log(array.length); // still 3 since element was not added.
 console.log(Object.keys(array).length); // 5 s

 const array = ['Apples', 'Peaches', 'Grapes'];
 array[3.4] = 'Oranges';
 array[-2] = 'Watermelon';
 
 console.log(array);  
 // ["Apples", "Peaches", "Grapes", 3.4: "Oranges", -2: "Watermelon"]
 
 console.log(Object.keys(array));      
 // ["0", "1", "2", "3.4", "-2"]
 
 // "0", "1", "2" are the indices/keys/property names 
 // for "Apples", "Peaches", "Grapes"
 console.log(array[0]);                // Apples
 console.log(array[1]);                // Peaches
 console.log(array[2]);                // Grapes
 console.log(array['2']);              // Grapes
 
 // "3.4" and "-2" are keys/property names that exist 
 // in the 'Array Object'
 console.log(array[3.4]);              // Oranges
 console.log(array[-2]);               // Watermelon
 console.log(array['-2']);             // Watermelon