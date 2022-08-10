// 7 kyu Greatest common divisor
function mygcd(x, y) {
  const xDivs = findDivisors(x);
  const yDivs = findDivisors(y);
  const commonDivisors = xDivs
    .filter((value) => yDivs.includes(value))
    .sort((a, b) => b - a);
  return commonDivisors[0];

  function findDivisors(n) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        divisors.push(i);
        divisors.push(n / i);
      }
    }
    return divisors;
  }
}
