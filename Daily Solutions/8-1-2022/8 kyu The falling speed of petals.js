// 8 kyu The falling speed of petals
function sakuraFall(v) {
  if (v <= 0) return 0;
  const w = 80 * 5;
  return w / v;
}
