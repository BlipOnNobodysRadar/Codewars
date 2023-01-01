// 7 kyu Halving Sum
function halvingSum(n) {
  let arr = [];
  while (n >= 1) {
    arr.push(n);
    n = Math.floor(n / 2);
  }
  return arr.reduce((sum, num) => sum + num, 0);
}
