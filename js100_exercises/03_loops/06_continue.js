/*
write a for loop that loops over the elements of the array cities and
logs the length of each string to the console. If the element is null,
 skip forward to the next iteration without logging anything to the
 console.

*/
const cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let index = 0; index < cities.length; index += 1) {
  if (cities[index] == null) {
    continue;
  }

  console.log(cities[index].length);
}
