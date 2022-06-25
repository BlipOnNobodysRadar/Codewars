// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/javascript
// How many stairs will Suzuki climb in 20 years?

function stairsIn20(s) {
  return (
    s.reduce(
      (sum, subArr) => sum + subArr.reduce((sum2, steps) => sum2 + steps, 0),
      0
    ) * 20
  );
}
