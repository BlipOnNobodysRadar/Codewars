// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript
// +1 Array

function upArray(arr) {
  if (
    arr.length < 1 ||
    arr.some(
      (val) => !Number.isInteger(val) || val < 0 || val.toString().length !== 1
    )
  ) {
    return null;
  }
  return (BigInt(arr.map((num) => num.toString()).join("")) + 1n)
    .toString()
    .split("")
    .map((str) => Number(str));
}
