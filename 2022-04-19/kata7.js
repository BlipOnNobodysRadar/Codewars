// https://www.codewars.com/kata/5715eaedb436cf5606000381/
// You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    return arr.reduce((sum, curr) => sum + curr > 0 ? curr : 0,0);
  }