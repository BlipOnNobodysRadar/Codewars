// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
function solution(string) {
    let strArr = string.split('');
  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i] === strArr[i].toUpperCase()) {
      strArr.splice(i,0,' ')
      i++;
    }
  }
  return strArr.join('')
}