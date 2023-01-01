// https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript

var findDigit = function (num, nth) {
  if (nth <= 0) return -1;
  const numString = Math.abs(num).toString().split('').reverse();
  return numString[nth - 1] ? Number(numString[nth - 1]) : 0;
};
