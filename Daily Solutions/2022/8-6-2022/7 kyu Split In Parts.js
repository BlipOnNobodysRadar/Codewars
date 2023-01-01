// 7 kyu Split In Parts

// inefficient
var splitInParts = function (s, partLength) {
  let arr = [];
  let iterator = 0;
  while (iterator < s.length) {
    arr.push(s.slice(iterator, iterator + partLength));
    iterator += partLength;
  }
  return arr.join(" ");
};

// O(n/partLength) solution
var splitInParts = function (s, partLength) {
  let resStr = "";
  for (let i = 0; i < s.length; i += partLength) {
    resStr += s.slice(i, i + partLength) + " ";
  }
  return resStr.slice(0, resStr.length - 1);
};
