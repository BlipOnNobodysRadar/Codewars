// All Star Code Challenge #3 (7kyu)
// https://www.codewars.com/kata/58640340b3a675d9a70000b9/train/javascript

var removeVowels = function (str) {
  const v = "aeiou".split("");
  return str
    .split("")
    .map((c) => (v.includes(c) ? "" : c))
    .join("");
};
