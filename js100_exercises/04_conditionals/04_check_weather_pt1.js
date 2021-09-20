/*
Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

    "It's a beautiful day!" if weather is assigned to the string "sunny",
    "Grab your umbrella." if weather is assigned to the string "rainy", and
    "Let's stay inside." otherwise.

Test your code with different values for weather.
*/

let randomIndex = Math.round(Math.random() * 2); // return between 0 and 2

let weatherConditions = ['sunny', 'rainy', 'cloudy'];

let weather = weatherConditions[randomIndex];

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log('Grab your umbrella.');
} else {
  console.log("Let's stay inside.");
}