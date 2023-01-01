// 7 kyu Flatten
var flatten = function (array) {
  let newArr = [];
  array.forEach((subarr) => (newArr = newArr.concat(subarr)));
  return newArr;
};
