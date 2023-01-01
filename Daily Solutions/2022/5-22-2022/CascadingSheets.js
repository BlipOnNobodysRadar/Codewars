// https://www.codewars.com/kata/545af3d185166a3dec001190/train/javascript
function eachCons(array, n) {
	let newArr = [];
  for(let i = 0; i < array.length; i++) {
    if(array.slice(i,i+n).length === n) {
      newArr.push(array.slice(i,i+n))
    }
  }
  return newArr;
}