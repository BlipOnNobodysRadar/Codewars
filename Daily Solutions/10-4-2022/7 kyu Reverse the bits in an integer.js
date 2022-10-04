// 7 kyu Reverse the bits in an integer
function reverseBits(n) {
  return parseInt(n.toString(2).split("").reverse().join(""), 2);
}
