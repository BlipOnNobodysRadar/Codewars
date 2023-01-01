// 7 kyu Numbers in strings
function solve(s) {
  // replace all non-num char with standard char "-" then split, trim, num
  const nums = "1234567890".split("");
  s = s
    .split("")
    .map((c) => (nums.includes(c) ? c : "-"))
    .join("");
  return Math.max(
    ...s
      .split("-")
      .filter((entry) => entry !== "")
      .map((nStr) => Number(nStr))
  );
}
