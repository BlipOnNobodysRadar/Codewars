// 7 kyu lucky number
function isLucky(n) {
  return (
    String(n)
      .split("")
      .reduce((sum, d) => sum + Number(d), 0) %
      9 ===
      0 || n === 0
  );
}
