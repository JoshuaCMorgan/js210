/*
The processOrder function shown below accepts the following arguments:
price, quantity, discount, serviceCharge and tax.
Any arguments other than price may be omitted when calling the function,
in which case, default values will be assigned.
*/

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100, 2, .15));      // 126.5

/*
This function uses conditional statements to test whether arguments have
been omitted. When an argument is omitted, JavaScript automatically
initializes it to a value of undefined. The function takes advantage of this
behavior by setting undefined arguments to a default value.

The following variation of the processOrder function has the same behavior
as the first:
*/

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

/*
However, both of these solutions have a limitation that can lead to an incorrect result for certain inputs. What is this limitation and how does it affect the result?

 0 is a falsy value in JavaScript, so any arguments with a value of 0 get reassigned a default value.
*/