// Difference Of Squares (7kyu)
// https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript

function differenceOfSquares(n) {
  let sum = 0,
    sumSq = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    sumSq += i ** 2;
  }
  return Math.abs(sumSq - sum ** 2);
}
