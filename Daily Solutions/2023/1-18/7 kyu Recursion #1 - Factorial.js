// 7 kyu Recursion #1 - Factorial

const factorial = (n) => {
  return n === 1 || n === 0 ? 1 : n * factorial(n - 1);
};
