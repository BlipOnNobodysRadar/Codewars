// 8 kyu Wilson primes
function amIWilson(p) {
  return Number.isInteger((factorial(p - 1) + 1) / (p * p));
}

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
