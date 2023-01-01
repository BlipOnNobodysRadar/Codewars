// 7 kyu Case Swapping
function swap(str) {
  return str
    .split("")
    .map((c) => (c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase()))
    .join("");
}
