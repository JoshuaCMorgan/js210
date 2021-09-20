function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    const { length } = letters;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

const arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
