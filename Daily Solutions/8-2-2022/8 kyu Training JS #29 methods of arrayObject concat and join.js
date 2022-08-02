// 8 kyu Training JS #29 methods of arrayObject concat and join
function bigToSmall(arr) {
  const newArr = [];
  arr.forEach((subarr) => subarr.forEach((n) => newArr.push(n)));
  return newArr.sort((a, b) => b - a).join(">");
}
