// https://www.codewars.com/kata/54df2067ecaa226eca000229/train/javascript

function f(n) {
  if (!Number.isInteger(n) || n <= 0) return false;
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  return sum;
}
