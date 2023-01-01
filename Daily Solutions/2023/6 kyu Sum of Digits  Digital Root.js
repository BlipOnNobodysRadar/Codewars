// 6 kyu Sum of Digits / Digital Root

function digitalRoot(n) {
  // ...
  sumOfDigits = sumDigits(n);
  return String(sumOfDigits).length === 1
    ? sumOfDigits
    : digitalRoot(sumOfDigits);
}
function sumDigits(n) {
  return String(n)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(digitalRoot(16));
