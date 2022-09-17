// 7 kyu Lost number in number sequence
function findDeletedNumber(arr, mixArr) {
  for (let num of arr) {
    if (!mixArr.includes(num)) return num;
  }
  return 0;
}
