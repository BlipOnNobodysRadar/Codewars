// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

function factorial(n) {
  return n === 0 || n === 1 ? 1 : factorial(n - 1) * n;
}
