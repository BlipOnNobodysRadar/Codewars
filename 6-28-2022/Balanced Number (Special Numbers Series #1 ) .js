// https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript
// Balanced Number (Special Numbers Series #1 )

function balancedNum(number) {
  const numArr = number
    .toString()
    .split("")
    .map((n) => Number(n));
  const midPoint = parseInt(numArr.length / 2);
  if (numArr.length % 2 === 0) {
    return numArr.slice(0, midPoint - 1).reduce((s, v) => s + v, 0) ===
      numArr.slice(midPoint + 1).reduce((s, v) => s + v, 0)
      ? "Balanced"
      : "Not Balanced";
  }
  return numArr.slice(0, midPoint).reduce((s, v) => s + v, 0) ===
    numArr.slice(midPoint + 1).reduce((s, v) => s + v, 0)
    ? "Balanced"
    : "Not Balanced";
}
console.log(balancedNum(112211));
