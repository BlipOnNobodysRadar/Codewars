// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num){
    let returnStr = '';
    for(let i = 1; i <= num; i++) {
      returnStr+= `${i} sheep...`;
    }
    return returnStr;
  }