// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
// Array Helpers

Array.prototype.square = function (arr) {
  return this.map((num) => num ** 2);
};

Array.prototype.cube = function (arr) {
  return this.map((num) => num ** 3);
};

Array.prototype.sum = function (arr) {
  return this.reduce((sum, num) => sum + num, 0);
};
Array.prototype.average = function (arr) {
  return this.sum() / this.length;
};
Array.prototype.even = function (arr) {
  return this.filter((num) => num % 2 === 0);
};
Array.prototype.odd = function (arr) {
  return this.filter((num) => num % 2 !== 0);
};
