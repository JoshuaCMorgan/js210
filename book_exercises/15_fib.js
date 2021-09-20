function fibonacci(number) {
  if (number < 2) return number;

  number = fibonacci(number - 1) + fibonacci(number - 2);
  return number;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));
console.log(fibonacci(10));