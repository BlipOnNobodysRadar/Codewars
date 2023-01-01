// 7 kyu Narcissistic Numbers
function isNarcissistic(n) {
  const l = n.toString().length;
  return (
    n
      .toString()
      .split("")
      .reduce((sum, digit) => sum + digit ** l, 0) === n
  );
}
