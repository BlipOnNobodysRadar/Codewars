// Enumerable Magic #5- True for Just One.js
function one(arr, fun) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      count++;
      if (count > 1) return false;
    }
  }
  return count === 1;
}
