// 8 kyu Collatz Conjecture (3n+1)
var hotpo = function (n) {
  let count = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    count++;
  }
  return count;
};
