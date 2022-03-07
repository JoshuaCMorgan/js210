const fibonacci = (nth) => {
  let fibNums = [1, 1];
  
  for (let num = 2; num < nth; num += 1) {
    [a, b] = [fibNums[0], fibNums[1]];
    fibNums = [b, a + b];
  }
  return fibNums[1];
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050