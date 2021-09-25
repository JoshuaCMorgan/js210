let apple = 3;
let banana = undefined;
let areEqual = (apple === banana);
console.log(areEqual);

let eitherOr = apple || banana;
console.log(eitherOr);

if (apple === banana) {
  console.log("An apple is a banana");
} else {
    if (apple == banana) {
      console.log("The two are the same number but different types");
    }
    else {
    console.log("An apple is not a banana");
    }
  }

