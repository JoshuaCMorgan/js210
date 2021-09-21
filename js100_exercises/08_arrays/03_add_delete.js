// We are given the following array of energy sources.
// Remove 'fossil' from the array, then add 'geothermal'
// to the end of the array.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift(); // [ 'solar', 'wind', 'tidal', 'fusion' ]
energy.push('geothermal'); // [ 'solar', 'wind', 'tidal', 'fusion', 'geothermal' ]

console.log(energy);

// other ways

energy = energy.slice(1);
energy.splice(0, 1);