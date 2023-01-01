// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/javascript
function roundToNext5(n){
    for(let i = 0; i < 5; i++) {
      if((n + i)%5 ===0) return n+i;
    }
  }