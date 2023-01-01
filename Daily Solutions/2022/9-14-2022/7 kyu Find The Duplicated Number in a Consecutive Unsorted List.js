// 7 kyu Find The Duplicated Number in a Consecutive Unsorted List
function findDup(arr) {
  for (let num of arr) {
    if (arr.indexOf(num) !== arr.lastIndexOf(num)) return num;
  }
}

//Someone's O(n) solution
/*
function findDup(arr){
  var seen = {};
  for(let e of arr) {
    if(seen[e])return e;
    seen[e]=true;
  }
}
*/
