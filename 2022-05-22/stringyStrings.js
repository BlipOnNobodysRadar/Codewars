// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript
function stringy(size) {
    let returnVal = ''
    for(let i = 0; i < size; i++) {
      i % 2 === 0 ? returnVal+= 1 : returnVal+=0;
    }
    return returnVal;
  }