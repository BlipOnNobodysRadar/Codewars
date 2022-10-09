// 7 kyu shorter concat [reverse longer]
function shorter_reverse_longer(a, b) {
  return a.length >= b.length
    ? b + a.split("").reverse().join("") + b
    : a + b.split("").reverse().join("") + a;
}
const shorter_reverse_longer = (a, b) =>
  a.length >= b.length
    ? b + a.split("").reverse().join("") + b
    : a + b.split("").reverse().join("") + a;
