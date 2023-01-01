// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

function predictAge(...age){
    return parseInt(Math.sqrt(age.reduce((total,num) => total + num*num,0))/2);
  }