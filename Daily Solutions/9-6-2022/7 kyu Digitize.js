// 7 kyu Digitize
function digitize(n) {
  return n
    .toString()
    .split("")
    .map((s) => +s);
}
