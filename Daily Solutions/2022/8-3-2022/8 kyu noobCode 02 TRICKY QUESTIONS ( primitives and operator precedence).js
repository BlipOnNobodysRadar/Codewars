// 8 kyu noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)
function greaterThanLessThan(a, b, c) {
  return a < b < c;
  // (a < b) < c
  // prettier automatically removes () but they are needed.
}
