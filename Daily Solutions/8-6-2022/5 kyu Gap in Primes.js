// 5 kyu Gap in Primes
function gap(g, m, n) {
  // looking for a gap of g
  // return the first pair of primes with given gap in the range of m and n
  // if none found return null

  // PREP
  // params: integers g, m, n where g is the "gap", m is the start, n is the end range
  // return: the first pair of primes with given gap, or null if none
  // examples: given
  // PSUEDOCODE:
  // helper function to find primes (already known, divisors up to sqrt num)
  // an array to store found primes
  // a loop to iterate over ints and check for primes between m and n
  // a conditional in the loop to check for gaps between primes (foundPrime - lastPrime)
  // conditional breaks the loop if a pair with the correct gap is found, returns pair
  // return null after loop, because none found.
  let lastPrime;
  for (m; m <= n; m++) {
    if (isPrime(m)) {
      if (m - lastPrime === g) return [lastPrime, m];
      lastPrime = m;
    }
  }
  return null;
}
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
