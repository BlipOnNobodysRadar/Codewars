// 6 kyu Sum of Digits  Digital Root
function digitalRoot(n) {
  if (n.toString().length === 1) return n;
  const newN = n
    .toString()
    .split("")
    .reduce((sum, digit) => Number(digit) + sum, 0);
  return digitalRoot(newN);
}
