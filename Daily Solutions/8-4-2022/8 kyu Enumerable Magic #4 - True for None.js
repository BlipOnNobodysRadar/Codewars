// 8 kyu Enumerable Magic #4 - True for None
function none(arr, fun) {
  if (arr.length === 0) return true;
  return arr.every((v, i) => !fun(v, i));
}
