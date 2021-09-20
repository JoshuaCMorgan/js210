const myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);
myObj.qux = 3;

const objKeys = Object.keys(myObj);
objKeys.forEach((key) => {
  console.log(key);
});

for (const key in myObj) {
  console.log(key);
}

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}