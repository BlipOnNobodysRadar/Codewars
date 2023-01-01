// 7 kyu Filter the number
var filterString = function (value) {
  return Number(value.match(/[0-9]/g).join(""));
};
