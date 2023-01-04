// 7 kyu Especially Joyful Numbers
function numberJoy(n) {
  const sum = String(n)
    .split("")
    .reduce((s, num) => s + +num, 0);
  const revSum = String(sum)
    .split("")
    .reverse()
    .map((s) => +s)
    .join("");
  return sum * revSum === n;
}
