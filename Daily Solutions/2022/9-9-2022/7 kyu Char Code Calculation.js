// 7 kyu Char Code Calculation
function calc(x) {
  return (
    x
      .split("")
      .map((c) => c.charCodeAt())
      .join("")
      .split("")
      .filter((c) => c === "7").length * 6
  );
}
