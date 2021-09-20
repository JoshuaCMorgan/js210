/*
Use JavaScript's string methods on the string 'Captain Ruby' to 
produce the string 'Captain JavaScript'.
*/

let result = 'Captain Ruby'.replace('Ruby', 'JavaScript');
console.log(result);

let result2 = 'Captain Ruby'.substr(0, 8) + 'JavaScript';
console.log(result2);

let result3 = 'Captain Ruby'.split(' ')[0] + ' JavaScript';
console.log(result3);