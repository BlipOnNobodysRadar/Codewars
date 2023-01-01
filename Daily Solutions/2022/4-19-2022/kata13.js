// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

/*
Write a function, persistence, that takes in a positive parameter num and 
returns its multiplicative persistence, which is the number
 of times you must multiply the digits in num until you reach a single digit.
*/
function persistence(num) {
    let count = 0;
    let digits = num.toString().length;
    let currentNum = num;
    let currentNumArr = num.toString().split("");
    while(digits !== 1) {
      currentNum = currentNumArr.reduce((result, digit)  => result * Number(digit));
      digits = currentNum.toString().length;
      currentNumArr = currentNum.toString().split("");
      count++;
    }
   return count;
 }