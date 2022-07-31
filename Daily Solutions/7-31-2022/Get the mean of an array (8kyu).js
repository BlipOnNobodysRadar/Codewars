// Get the mean of an array (8kyu)
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
function getAverage(marks) {
  return parseInt(marks.reduce((sum, m) => sum + m, 0) / marks.length);
}
