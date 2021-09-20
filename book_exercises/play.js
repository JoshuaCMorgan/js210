let bob = {
  name: 'Bob',
  age: 22,
  height: '5 ft',
};

let bobKeys = Object.keys(bob);
console.log(bobKeys);

let studentBob = Object.create(bob);

studentBob.year = 'Senior';

