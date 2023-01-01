// 7 kyu Easy wallpaper
function wallpaper(l, w, h) {
  const sW = 0.52;
  const sL = 10;
  //2l + 2w = totalWidth needed
  // ^ that num *
  let res = Math.ceil(((2 * l * h + 2 * w * h) * 1.15) / 5.2);
  return l * w * h === 0 ? "zero" : numbers[res];
}
