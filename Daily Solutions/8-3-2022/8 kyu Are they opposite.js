// 8 kyu Are they opposite?
function isOpposite(s1, s2) {
  if (s1 === s2 || s1.length !== s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      return false;
    }
  }
  return true;
}
