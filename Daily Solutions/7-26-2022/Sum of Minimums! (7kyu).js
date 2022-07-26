// Sum of Minimums! (7kyu)
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
  return arr.reduce((sum, subarr) => Math.min(...subarr) + sum, 0);
}
