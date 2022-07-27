// Series of integers from m to n (7kyu)
// https://www.codewars.com/kata/5841f680c5c9b092950001ae/train/javascript

function generateIntegers(m, n) {
  const res = [];
  for (m; m <= n; m++) {
    res.push(m);
  }
  return res;
}
