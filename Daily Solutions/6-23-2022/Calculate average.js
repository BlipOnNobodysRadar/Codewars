// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
// Calculate Average

function find_average(array) {
  return array.reduce((sum, num) => sum + num, 0) / array.length || 0;
}
