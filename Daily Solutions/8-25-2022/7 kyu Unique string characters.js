// 7 kyu Unique string characters
function solve(a, b) {
  return (
    a
      .split("")
      .filter((c) => !b.includes(c))
      .join("") +
    b
      .split("")
      .filter((c) => !a.includes(c))
      .join("")
  );
}
