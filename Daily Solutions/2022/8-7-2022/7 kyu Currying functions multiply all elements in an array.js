// 7 kyu Currying functions: multiply all elements in an array
function multiplyAll(ints) {
  return (n) => ints.map((num) => num * n);
}
