// 7 kyu Largest 5 digit number in a series
function solution(digits) {
  let arr = [];
  for (let i = 0; i < digits.length; i++) {
    arr.push(digits.slice(i, i + 5));
  }
  return Math.max(...arr.map((str) => +str));
}
