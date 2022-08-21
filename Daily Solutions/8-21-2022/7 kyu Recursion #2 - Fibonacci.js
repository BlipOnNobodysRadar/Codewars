// 7 kyu Recursion #2 - Fibonacci
const fibonacci = (n) => {
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
