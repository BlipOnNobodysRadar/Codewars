// 7 kyu Special Number (Special Numbers Series #5)
function specialNumber(n) {
  const valid = "012345".split("");
  return String(n)
    .split("")
    .every((c) => valid.includes(c))
    ? "Special!!"
    : "NOT!!";
}
