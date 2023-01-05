// 7 kyu Is n divisible by (...)
function isDivisible(first, ...rest) {
  return rest.every((el) => first % el === 0);
}
