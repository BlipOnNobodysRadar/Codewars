// 7 kyu Return String of First Characters
function makeString(s) {
  return s
    .split(" ")
    .map((w) => w[0])
    .join("");
}
