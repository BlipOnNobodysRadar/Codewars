 // https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

 function minValue(values){
    return Number(Array.from(new Set(values.sort((a,b) => a - b))).join(''));
  }