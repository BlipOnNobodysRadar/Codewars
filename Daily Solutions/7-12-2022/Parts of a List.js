// Parts of a list
// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

function partlist(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push([arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" ")]);
  }
  return newArr;
}
