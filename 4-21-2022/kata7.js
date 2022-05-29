// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
*/

function findEvenIndex(arr)
{
  for(let i = 0; i < arr.length; i++) {
    if(sumLeft(arr, i) === sumRight(arr, i)) {
      return i
    }
  }
  return -1;
  
  ///helper functions
  function sumLeft(arr, index) {
    let sum = 0;
    for(let i = 0; i < index; i++) {
      sum += arr[i];
    }
    return sum;
  }
  function sumRight(arr,index) {
    let sum = 0;
    for(let i = arr.length -1; i > index; i--) {
      sum += arr[i];
    }
    return sum;
  }
}