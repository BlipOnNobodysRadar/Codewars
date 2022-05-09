// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
function squareSum(numbers){
    return numbers.reduce((acc, num) => acc + num**2,0);
  }