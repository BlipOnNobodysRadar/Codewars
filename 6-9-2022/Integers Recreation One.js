// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

function listSquared(m, n) {
  const listOfSquares = new Array();
  for (let i = m; i <= n; i++) {
    let sqrtSum = Math.hypot(...getDivisors(i));
    if (Number.isInteger(Number(sqrtSum.toFixed(5)))) {
      listOfSquares.push([i, parseInt(sqrtSum ** 2)]);
    }
  }
  return listOfSquares;
}

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

console.log(Number.isInteger(Number((290.00000003).toFixed(2))));
