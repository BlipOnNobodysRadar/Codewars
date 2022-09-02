// 7 kyu Find min and max
// commit fix
function getMinMax(arr) {
  const newArr = arr.slice().sort((a, b) => a - b);
  return [newArr[0], newArr[newArr.length - 1]];
}
