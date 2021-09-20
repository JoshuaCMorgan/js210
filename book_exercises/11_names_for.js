const names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
const upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  const UpperCaseName = names[index].toUpperCase();
  upperNames.push(UpperCaseName);
}

console.log(upperNames);
