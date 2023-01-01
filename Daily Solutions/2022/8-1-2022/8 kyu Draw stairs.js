// 8 kyu Draw stairs
function drawStairs(n) {
  let str = "";
  let padding = 1;
  for (let i = 1; i <= n; i++) {
    i === n
      ? (str += "I".padStart(padding, " "))
      : (str += "I".padStart(padding, " ") + "\n");
    padding++;
  }
  return str;
}
