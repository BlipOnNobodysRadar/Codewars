// 8 kyu Be Concise III - Sum Squares
function sumSquares(a) {
  return a.reduce((s, n) => s + n ** 2, 0);
}
