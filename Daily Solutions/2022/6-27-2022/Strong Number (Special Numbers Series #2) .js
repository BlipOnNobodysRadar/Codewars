// https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript
// Strong Number (Special Numbers Series #2)

function strong(n) {
  return n
    .toString()
    .split("")
    .reduce((sum, d) => factorial(Number(d)) + sum, 0) === n
    ? "STRONG!!!!"
    : "Not Strong !!";
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
