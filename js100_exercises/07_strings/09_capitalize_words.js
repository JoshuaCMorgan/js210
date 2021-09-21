/*
Write code that capitalizes the words in the string 'launch school tech
& talk', so that you get the string 'Launch School Tech & Talk'.
*/

function capWords(string) {
  let words = string.split(' ');
  let capitalWords = words.map((word) => word[0].toUpperCase() + word.slice(1));
  return capitalWords.join(' ');
}

let string = 'launch school tech & talk';
console.log(capWords(string));

let capSentence = string.replace(/(^\w{1})/, letter => letter.toUpperCase());
console.log(capSentence);