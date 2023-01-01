// 7 kyu Move 10
function moveTen(s) {
  return s
    .split("")
    .map((c) => String.fromCharCode(((c.charCodeAt() - 87) % 26) + 97))
    .join("");
}
