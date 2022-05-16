// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function arrayDiff(a, b) {
    b = Array.from(new Set(b));
    for(let val of b) {
      a = a.filter(item => item !== val);
    }
    return a;
  }