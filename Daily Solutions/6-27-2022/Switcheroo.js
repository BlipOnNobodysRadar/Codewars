// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
// Switcheroo
function switcheroo(x) {
  return x
    .split("")
    .map((c) => (c === "a" ? "b" : c === "b" ? "a" : c))
    .join("");
}
