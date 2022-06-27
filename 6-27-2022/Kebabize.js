// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
// Kebabize

function kebabize(str) {
  const filtered = str.split("").filter((c) => isAlpha(c));
  const camel = filtered
    .map((c) => (c === c.toUpperCase() ? `-${c.toLowerCase()}` : c))
    .join("");
  return camel[0] === "-" ? camel.slice(1) : camel;
}

function isAlpha(c) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  return alpha.includes(c) || alpha.includes(c.toLowerCase());
}
