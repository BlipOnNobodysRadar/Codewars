// 6 kyu Steps in Primes
function step(g, m, n) {
  let primes = [];
  let lastPrime;
  let distanceBetweenLast = 0;
  for (m; m <= n; m++) {
    if (isPrime(m)) {
      primes.push(m);
      if (!lastPrime) {
        lastPrime = m;
      } else {
        lastGap;
      }
    }
  }
  let length = primes.length;
  let distanceBetweenLast = 0;
  for (let i = 0; i < length; i++) {
    let check = primes.shift();
  }
  return null;
}
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
