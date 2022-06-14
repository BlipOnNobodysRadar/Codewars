function getDivisors(n) {
  let divisors = new Set();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.add(i);
      divisors.add(n / i);
    }
  }
  return Array.from(divisors);
}
console.log(getDivisors(11));
