// 7 kyu Squares sequence
function squares(x, n) {
  if (n <= 0) return [];
  const res = [];
  let prev = x;
  res.push(prev);
  for (let i = 1; i < n; i++) {
    res.push(prev ** 2);
    prev = prev ** 2;
  }
  return res;
}
