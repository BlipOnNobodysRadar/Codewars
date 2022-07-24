// Indexed capitalization (7kyu)
// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

function capitalize(s, arr) {
  const sArr = s.split("");
  arr.forEach((n) => (sArr[n] ? (sArr[n] = sArr[n].toUpperCase()) : undefined));
  return sArr.join("");
}
