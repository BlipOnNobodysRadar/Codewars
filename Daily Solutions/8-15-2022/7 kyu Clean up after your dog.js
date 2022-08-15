// 7 kyu Clean up after your dog
function crap(x, bags, cap) {
  x = x.flat();
  if (x.includes("D")) return "Dog!!";
  const max = bags * cap;
  let count = x.reduce((sum, el) => (el === "@" ? sum + 1 : sum), 0);
  return count > max ? "Cr@p" : "Clean";
}
