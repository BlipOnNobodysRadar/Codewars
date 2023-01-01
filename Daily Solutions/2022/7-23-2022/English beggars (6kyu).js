// English beggars (6kyu)
// https://www.codewars.com/kata/59590976838112bfea0000fa/train/javascript

function beggars(values, n) {
  const sumEarnings = [];
  for (let i = 1; i <= n; i++) {
    let earnings = [];
    for (let j = i - 1; j < values.length; j += n) {
      earnings.push(values[j]);
    }
    sumEarnings.push(earnings.reduce((sum, n) => sum + n, 0));
  }
  return sumEarnings;
}
