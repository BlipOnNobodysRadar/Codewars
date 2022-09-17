// 7 kyu Array element parity
function solve(arr) {
  for (let num of arr) {
    if (!arr.includes(-num)) return num;
  }
}
