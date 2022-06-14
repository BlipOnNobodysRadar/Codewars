// https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript

function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => a - b)
    .slice(-size)
    .reduce((acc, val) => acc * val);
}
