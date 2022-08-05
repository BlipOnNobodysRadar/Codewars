// 7 kyu Find the divisors!
function divisors(integer) {
  let isPrime = true;
  let divisors = [];

  for (let i = 2; i < Math.sqrt(integer); i++) {
    if (integer % i === 0) {
      isPrime = false;
      divisors.push(i);
      divisors.push(integer / i);
    }
  }
  return isPrime ? `${integer} is prime` : divisors.sort((a, b) => a - b);
}
