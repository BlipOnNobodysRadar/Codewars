// 7 kyu Find The Duplicated Number in a Consecutive Unsorted List
function findDup(arr) {
  for (let num of arr) {
    if (arr.indexOf(num) !== arr.lastIndexOf(num)) return num;
  }
}
