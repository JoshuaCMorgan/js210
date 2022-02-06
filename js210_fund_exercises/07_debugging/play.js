function myReduce(array, func, initial) {
  let index;
  let accumulator;

  if (initial === undefined) {
    index = 1;
    accumulator = array[0];
  } else {
    index = 0;
    accumulator = initial;
  }

  array.slice(index).forEach(currentElement => {
    accumulator = func(accumulator, currentElement);
  });

  return accumulator;
}

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}


console.log(longestWord(['abc', 'launch', 'targets', '']));