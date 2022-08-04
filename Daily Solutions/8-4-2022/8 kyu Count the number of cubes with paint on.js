// 8 kyu Count the number of cubes with paint on
var countSquares = function (cuts) {
  return cuts === 0 ? 1 : 6 * cuts ** 2 + 2;
};

// Solution found by coming up with first few solutions mentally:
// 0 = 1, 1 = 8, 2 = 26... and using that sequence to lookup formula.
// I'm not about to reinvent math.
