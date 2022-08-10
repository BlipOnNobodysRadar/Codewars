// 7 kyu Are the numbers in order.js
function inAscOrder(arr) {
  const copy = arr.slice();
  return copy.sort((a, b) => a - b).every((num, ind) => num === arr[ind]);
}
