// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript
// Ordered Count of Characters

var orderedCount = function (text) {
  const counts = {};
  let chars = [];
  text.split("").forEach((c) => {
    if (!counts[c]) {
      chars.push(c);
      counts[c] = 1;
    } else counts[c]++;
  });
  const returnArr = [];
  for (const c of chars) {
    returnArr.push([c, counts[c]]);
  }
  return returnArr;
};
