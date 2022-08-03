// 8 kyu Training JS #34 methods of Math---pow() sqrt() and cbrt()
function cutCube(v, n) {
  if (!isCube(v)) return false;
  return isCube(v / n);
}
function isCube(n) {
  const x = Math.round(Math.pow(n, 1 / 3));
  return n === x ** 3;
}
