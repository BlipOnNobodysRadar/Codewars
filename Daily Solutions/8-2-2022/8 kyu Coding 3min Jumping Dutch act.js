// 8 kyu Coding 3min Jumping Dutch act
function sc(floor) {
  if (floor <= 1) return "";
  let ded = floor > 6 ? "" : " Aa!";
  let res = "";
  while (floor > 1) {
    res += "Aa~ ";
    floor--;
  }
  res += "Pa!" + ded;
  return res;
}
