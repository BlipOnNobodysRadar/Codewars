// 7 kyu All unique.js
function hasUniqueChars(str) {
  const strArr = str.split("");
  const charSet = new Set(strArr);
  return strArr.length === charSet.size;
}

// let hasUniqueChars = (str) => new Set(str).size === str.length;
// TIL you can create a set directly from a string.
