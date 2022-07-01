// https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript
// Get number from string

function getNumberFromString(s) {
  let nums = "1234567890".split("");
  return s
    .split("")
    .filter((d) => nums.includes(d))
    .join("");
}
