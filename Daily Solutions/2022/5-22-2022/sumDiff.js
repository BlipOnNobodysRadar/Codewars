// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function sumOfDifferences(arr) {
    arr = arr.sort((a,b) => b- a);
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i + 1] !== undefined) sum += arr[i] - arr[i+1];
    }
    return sum;
  }