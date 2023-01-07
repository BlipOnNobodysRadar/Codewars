// 7 kyu Arithmetic progression
function arithmeticSequenceElements(a, d, n) {
  let vals = [a];
  for (let i = 1; i < n; i++) {
    vals.push(vals[vals.length - 1] + d);
  }
  return vals.join(", ");
}
