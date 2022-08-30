// 7 kyu Reverse a Number
function reverseNumber(n) {
  const nArr = n.toString().split("");
  let nSign = "";
  if (nArr[0] === "-") {
    nSign = nArr.shift();
  }
  return Number(nSign + nArr.reverse().join(""));
}
