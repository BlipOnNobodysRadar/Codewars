// 7 kyu All unique.js
function hasUniqueChars(str) {
  const strArr = str.split("");
  const charSet = new Set(strArr);
  return strArr.length === charSet.size;
}
