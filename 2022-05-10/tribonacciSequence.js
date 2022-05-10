// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
function tribonacci(signature,n){
    if(n == 0) return [];
    let tribArr = signature;
    for(let i = 3; i < n; i++) {
      tribArr.push(tribArr[i-3] + tribArr[i-2] + tribArr[i-1]);
    }
    return tribArr.slice(0,n);
  }
