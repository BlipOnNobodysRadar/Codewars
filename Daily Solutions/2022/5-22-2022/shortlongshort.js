// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
function solution(a, b){
    let short;
    let long;
    if( a.length > b.length) {
      short = b;
      long = a;
    }else {
      short = a;
      long = b;
    }
    return short+long+short;
  }