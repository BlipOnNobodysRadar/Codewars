// 8 kyu Pythagorean Triple
function isPythagoreanTriple(integers) {
  integers.sort((a, b) => a - b);
  return integers[2] ** 2 === integers[0] ** 2 + integers[1] ** 2;
}
