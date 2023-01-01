// 5 kyu What's a Perfect Power anyway
var isPP = function (n) {
  const divisors = getDivisors(n);
  for (let i = 0; i < divisors.length; i++) {
    const d = divisors[i];
    for (let j = 2; j <= Math.log2(n); j++) {
      if (d ** j === n) return [d, j];
    }
  }
  return null;
};
function getDivisors(n) {
  let divisors = new Set();
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.add(i);
      divisors.add(n / i);
    }
  }
  return Array.from(divisors);
}
