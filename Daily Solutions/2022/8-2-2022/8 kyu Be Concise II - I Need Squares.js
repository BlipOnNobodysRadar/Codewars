// 8 kyu Be Concise II - I Need Squares
function squaresOnly(array) {
  return array.filter((value) => Number.isInteger(Math.sqrt(value)));
}
