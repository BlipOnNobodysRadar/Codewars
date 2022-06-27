// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
// isSorted

function isSortedAndHow(array) {
  if (isAscending(array)) return "yes, ascending";
  if (isDescending(array)) return "yes, descending";
  return "no";
}
function isAscending(array) {
  let lastVal = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < lastVal) return false;
    lastVal = array[i];
  }
  return true;
}
function isDescending(array) {
  let lastVal = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > lastVal) return false;
    lastVal = array[i];
  }
  return true;
}
