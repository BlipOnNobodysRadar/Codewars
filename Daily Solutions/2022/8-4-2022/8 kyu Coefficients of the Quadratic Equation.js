// 8 kyu Coefficients of the Quadratic Equation
function quadratic(x1, x2) {
  // Since a is always 1:
  // given (x-x1) * (x-x2) = 0
  // use FOIL to format result. since a always 1, can skip F. OI just ends up being -x1 + -x2. L ends up being x1 * x2
  return [1, -x1 + -x2, x1 * x2];
}
