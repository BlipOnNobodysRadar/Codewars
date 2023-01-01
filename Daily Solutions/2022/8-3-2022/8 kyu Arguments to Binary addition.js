// 8 kyu Arguments to Binary addition
function arr2bin(arr) {
  return arr
    .reduce((s, v) => (typeof v === "number" ? s + v : s), 0)
    .toString(2);
}
