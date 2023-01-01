// 7 kyu Divide and Conquer
function divCon(x) {
  const numTotal = x
    .filter((el) => typeof el === "number")
    .reduce((sum, num) => num + sum, 0);
  const strTotal = x
    .filter((el) => typeof el === "string")
    .reduce((sum, str) => sum + Number(str), 0);
  return numTotal - strTotal;
}
