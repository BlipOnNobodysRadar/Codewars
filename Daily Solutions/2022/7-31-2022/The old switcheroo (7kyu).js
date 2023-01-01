// The old switcheroo (7kyu)
// https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript

function vowel2index(str) {
  const v = "aeiou".split("");
  return str
    .split("")
    .map((c, i) => (v.includes(c.toLowerCase()) ? (i + 1).toString() : c))
    .join("");
}
