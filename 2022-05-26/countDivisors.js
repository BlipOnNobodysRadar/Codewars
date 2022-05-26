// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n){
    let divisors = new Set();
    for(let i = 1; i <=Math.sqrt(n); i++) {
      if(n%i===0) {
        divisors.add(i);
        divisors.add(n/i);
      }
    }
  return divisors.size;
}