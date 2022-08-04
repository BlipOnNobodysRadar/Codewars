// 8 kyu Points of Reflection
function symmetricPoint(p, q) {
  const xDiff = p[0] - q[0];
  const yDiff = p[1] - q[1];
  return [q[0] + -xDiff, q[1] + -yDiff];
}
