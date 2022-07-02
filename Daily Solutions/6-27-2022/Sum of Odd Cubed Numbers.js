// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
// Sum of Odd Cubed Numbers

function cubeOdd(arr) {
  return arr.some((val) => typeof val !== "number")
    ? undefined
    : arr.reduce((sum, n) => (n ** 3 % 2 !== 0 ? n ** 3 + sum : sum), 0);
}
