// 8 kyu Multiply the number
function multiply(number) {
  let mult = number.toString().length;
  if (number < 0) mult = mult - 1;
  return number * 5 ** mult;
}
