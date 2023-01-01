// Distance between points in 2D (8kyu)
// https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript

function distanceBetweenPoints(a, b) {
  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
}
