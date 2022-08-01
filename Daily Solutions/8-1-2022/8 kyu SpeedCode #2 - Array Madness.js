// 8 kyu SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
  return a.reduce((s, v) => s + v ** 2, 0) > b.reduce((s, v) => s + v ** 3, 0);
}
