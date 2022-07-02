// https://www.codewars.com/kata/58f0ba42e89aa6158400000e/
// Folding your way to the moon

function foldTo(distance) {
  if (distance < 0) return null;
  let folds = 0;
  let foldThickness = 0.0001;
  while (foldThickness < distance) {
    folds++;
    foldThickness *= 2;
  }
  return folds;
}
