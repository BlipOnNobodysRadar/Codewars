// Jumping Number (Special Numbers Series #4) (7kyu)
// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript

function jumpingNumber(n) {
  const digitArr = n
    .toString()
    .split("")
    .map((d) => Number(d));
  for (let i = 0; i < digitArr.length; i++) {
    if (i === 0) continue;
    if (Math.abs(digitArr[i] - digitArr[i - 1]) !== 1) return "Not!!";
  }
  return "Jumping!!";
}
