// 8 kyu Gravity Flip
const flip = (d, a) => {
  return d === "L" ? a.sort((b, c) => c - b) : a.sort((b, c) => b - c);
};
