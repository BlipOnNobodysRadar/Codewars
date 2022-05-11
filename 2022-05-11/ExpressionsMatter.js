// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

function factorial(n){
    if(n < 0 || n > 12) throw new RangeError('The argument must be between 0 and 12');
    let ans = 1;
    for(let i = 1; i <= n; i++) {
      ans = i * ans;
    }
    return ans;
  }
  
  
