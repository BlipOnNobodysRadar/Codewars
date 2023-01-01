// 8 kyu Implement Array.prototype.filter()
Array.prototype.filter = function (func) {
  const thisArr = this;
  const arr = [];
  for (let i = 0; i < thisArr.length; i++) {
    if (func(thisArr[i], i, thisArr)) arr.push(thisArr[i]);
  }
  return arr;
};
