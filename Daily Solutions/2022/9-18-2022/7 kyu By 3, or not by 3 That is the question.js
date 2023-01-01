// 7 kyu By 3, or not by 3? That is the question . . .
function divisibleByThree(str) {
  return Number.isInteger(
    str.split("").reduce((sum, digit) => Number(digit) + sum, 0) / 3
  );
}
