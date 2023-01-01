// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let a1Lengths = a1.map((str) => str.length);
  let a2Lengths = a2.map((str) => str.length);
  const o1 = Math.abs(Math.max(...a1Lengths) - Math.min(...a2Lengths));
  const o2 = Math.abs(Math.min(...a1Lengths) - Math.max(...a2Lengths));
  return o1 >= o2 ? o1 : o2;
}
