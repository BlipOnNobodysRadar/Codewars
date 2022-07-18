// Simple Fun 213 Is Function (7kyu).js
//https://www.codewars.com/kata/590001c24c5d02625b00005e/train/javascript
function isFunction(pairs) {
  const removedDups = Array.from(
    new Set(pairs.map((pair) => pair.toString()))
  ).map((str) => str.split(","));
  const xVals = removedDups.map((pair) => pair[0]);
  return new Set(xVals).size === xVals.length;
}
