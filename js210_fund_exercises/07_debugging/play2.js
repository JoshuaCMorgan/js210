function isEmpty(value) {
  // if (Array.isArray(value)) {
  //   return value.length === 0;
  // }
  let type = typeof value;
  if (type === 'string') {
    return value.length === 0;
  } else if (type === 'object' && value.constructor === Object) {
    return Object.keys(value).length === 0;
  } else if (Array.isArray(value)) {
    console.log(value);
    return value.length === 0;
  }
}

let myArr = [];
myArr["foo"] = "bar";
console.log(isEmpty(myArr)); // true

let myArr2 = [];
myArr2.length = 4;
console.log(isEmpty(myArr2)); //


let arr = [2, 4, 6];
arr.length = 5;
arr[4] = undefined;
console.log(isEmpty(arr));