// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

// return first pair as an array
function sumPairs(ints, s) {
    //j + j+i where i increases by 1 each loop, inner loop (if j + i >= length -1 break)
    for(let i = 1; i < ints.length; i++) {
        for(let j = 0; j < ints.length; j++) {
            if(j + i >= ints.length) break;
            if(ints[j] + ints[j+i] === s) return [ints[j],ints[j+i]];
        }
    }
  }
//works, but not efficient.