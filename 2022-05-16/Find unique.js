// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    let standardVal;
    if(arr[0] === arr[1]) {
      standardVal = arr[0]
      }
    else {
      return arr[0] === arr[2] ? arr[1] : arr[0]
    }
    for(let val of arr) {
      if(val !== standardVal) return val;
    }
  }
  