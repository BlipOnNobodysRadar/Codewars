// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
// Pillars

function pillars(num_pill, dist, width) {
  return num_pill > 2
    ? (dist * num_pill - dist) * 100 + (width * num_pill - 2 * width)
    : (dist * num_pill - dist) * 100;
}
