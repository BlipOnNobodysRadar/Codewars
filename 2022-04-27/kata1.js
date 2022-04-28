// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
function solution(str, ending){
    if(ending === '') return true;
    return str.slice(-ending.length) === ending;
  }
  //Learned that str.endsWith() is a method, which is obviously more appropriate.