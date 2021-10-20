/*
Write a function that takes a string consisting of zero or more 
space separated words and returns an object that shows the 
number of words of different sizes.

Words consist of any sequence of non-space characters.
*/

function wordSizes(text) {
  let resultObject = new Object();
  let words = text.split(' ');

  for (index = 0; index <= words.length - 1; index++) {
    let wordSize = words[index].length;
    if (text.length === 0) {
      continue;
    }
    if (resultObject.hasOwnProperty(wordSize)) {
      resultObject[wordSize] += 1;
    } else {
      resultObject[wordSize] = 1;
    }
  }

 return resultObject;
}

// function wordSizes(string) {
//   let wordCount= {};
//   if (string === '') return wordCount;
//   string.split(' ').forEach(word => {
//     wordCount[word.length] = wordCount[word.length] + 1 || 1;
//   });
//   return wordCount;
// }
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log( wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}



