// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum (numbers) {
    numbers.sort((a,b) => b - a);
    return numbers[0] + numbers[1];
  }