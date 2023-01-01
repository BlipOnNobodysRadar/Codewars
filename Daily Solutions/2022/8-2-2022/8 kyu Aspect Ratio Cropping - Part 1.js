// 8 kyu Aspect Ratio Cropping - Part 1
function aspectRatio(x, y) {
  x = Math.ceil((y / 9) * 16);
  return [x, y];
}
