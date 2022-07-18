// Find the Slope (8kyu)
// https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript
function slope(points) {
  return points[0] - points[2] === 0
    ? "undefined"
    : points[1] - points[3]
    ? ((points[1] - points[3]) / (points[0] - points[2])).toString()
    : "0";
}
