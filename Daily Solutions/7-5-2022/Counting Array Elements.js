// https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript
// Counting Array Elements
function count(array) {
  const count = {};
  array.forEach(
    (element) => (count[element] = count[element]++ ? count[element]++ : 1)
  );
  return count;
}
