// Rotate for a Max (7kyu)
// https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript

function maxRot(n) {
  const rotations = [n];
  const firstDigits = [];
  const arrayOfN = n
    .toString()
    .split("")
    .map((nStr) => Number(nStr));

  for (let i = 0; i < n.toString().length; i++) {
    arrayOfN.push(arrayOfN.shift());
    firstDigits.push(arrayOfN.shift());
    rotations.push(Number(firstDigits.concat(arrayOfN).join("")));
  }
  return Math.max(...rotations);
}
