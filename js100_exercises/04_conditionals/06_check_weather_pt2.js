/*
Take your code from the previous Check the Weather exercise and rewrite
it as a switch statement. Feel free to add more cases besides 'sunny'
and 'rainy'.
*/
let randomIndex = Math.round(Math.random() * 2); // return between 0 and 2

let weatherConditions = ['sunny', 'rainy', 'cloudy'];

let weather = weatherConditions[randomIndex];

switch(weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  default:
    console.log("Let's stay inside.");
    break;
}