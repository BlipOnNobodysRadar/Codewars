// https://www.codewars.com/kata/55e6f5e58f7817808e00002e/train/javascript

function seven(m) {
  let numString = m.toString();
  let steps = 0;
  while (numString.length >= 3) {
    let lastDigit = Number(numString[numString.length - 1]);
    numString = (
      Number(numString.slice(0, numString.length - 1)) -
      2 * lastDigit
    ).toString();
    steps++;
  }
  return [Number(numString), steps];
}
