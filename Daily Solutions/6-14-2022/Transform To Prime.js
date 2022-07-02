// https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript

/*
What I would do differently on a second pass: All even numbers are divisible by 2,
so exclude any even numbers from isPrime testing.
There also seems to be a math function that can find prime numbers more efficiently.
*/

function minimumNumber(numbers) {
  let sum = numbers.reduce((sum, num) => sum + num);
  if (isPrime(sum)) return 0;
  let count = 0;
  while (!isPrime(sum)) {
    sum++;
    count++;
  }
  return count;
}

function isPrime(n) {
  let divisors = new Set();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.add(i);
      divisors.add(n / i);
    }
  }
  return divisors.size === 2;
}
