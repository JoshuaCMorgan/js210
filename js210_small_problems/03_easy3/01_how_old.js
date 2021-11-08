function endsOf(beginningArr, endingArr) {
  let newArray = [];
  newArray.push(beginningArr[0])
  newArray.push(endingArr[endingArr.length -1])
  return newArray;
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]