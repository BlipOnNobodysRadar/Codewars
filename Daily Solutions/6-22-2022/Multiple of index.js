// Multiple of index
// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript

function multipleOfIndex(array) {
  return array.filter((el, i) => el % i === 0);
}
