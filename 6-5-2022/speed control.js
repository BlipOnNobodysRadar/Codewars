// https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript
function gps(s, x) {
  if (x.length <= 1) return 0;
  let avgSpeeds = [];
  for (let i = 1; i < x.length; i++) {
    avgSpeeds.push((3600 * (x[i] - x[i - 1])) / s);
  }
  return Math.max(...avgSpeeds);
}
