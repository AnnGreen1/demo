function Fibonacci(n) {
  // write code here
  let fibonacci = [1, 1];
  let i = 2;
  while (i < n) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    );
    i++;
  }
  return fibonacci[fibonacci.length - 1];
}
module.exports = {
  Fibonacci: Fibonacci,
};
