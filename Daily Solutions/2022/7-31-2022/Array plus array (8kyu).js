// Array plus array (8kyu)
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((s, v) => s + v, 0) + arr2.reduce((s, v) => s + v, 0);
}
