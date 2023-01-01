// 6 kyu Exclamation marks series #17 Put the exclamation marks and question marks on the balance - are they balanced.js
function balance(left, right) {
  return weight(left) === weight(right)
    ? "Balance"
    : weight(left) > weight(right)
    ? "Left"
    : "Right";
}
function weight(str) {
  return str
    .split("")
    .reduce(
      (sum, char) => (char === "!" ? sum + 2 : char === "?" ? sum + 3 : sum),
      0
    );
}
