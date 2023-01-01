// https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript

function sumTriangularNumbers(n) {
  if (n < 0) return 0;
  const triangularNums = [];
  for (let i = 0; i <= n; i++) {
    triangularNums.push((i * (i + 1)) / 2);
  }
  return triangularNums.reduce((acc, val) => acc + val);
}
