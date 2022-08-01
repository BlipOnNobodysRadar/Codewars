// 8 kyu Exclamation marks series #6 Remove n exclamation marks in the sentence from left to right
function remove(s, n) {
  for (let i = 1; i <= n; i++) {
    s = s.replace("!", "");
  }
  return s;
}
