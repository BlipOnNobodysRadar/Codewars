// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
function diamond(n){
    if(n < 1 || n % 2 === 0) return null;
    let returnArr = [], oddCount = 1;
    for(let i = 0; i < (n/2); i++) {
      returnArr.push(' '.repeat((n-oddCount)/2) + '*'.repeat(oddCount) + '\n');
      oddCount+=2;
    }
    return returnArr.concat(returnArr.slice(0,-1).reverse()).join('')
  }