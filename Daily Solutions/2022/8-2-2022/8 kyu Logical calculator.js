// 8 kyu Logical calculator
function logicalCalc(array, op) {
  if (op === "AND") return array.every((val) => val);
  if (op === "OR") return array.some((val) => val === true);
  let current = array[0];
  if (op === "XOR") {
    for (let i = 1; i < array.length; i++) {
      current = current !== array[i];
    }
    return current;
  }
}
