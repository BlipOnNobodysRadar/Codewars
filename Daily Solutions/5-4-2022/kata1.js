// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
 /*
 Task

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
*/
function dirReduc(arr){
    let newArr = [];
    for(let direction of arr) {
      if((direction === 'NORTH' && newArr[newArr.length-1] === 'SOUTH')
         || (direction === 'SOUTH' && newArr[newArr.length-1] === 'NORTH')
         || (direction === 'WEST' && newArr[newArr.length-1] === 'EAST')
         || (direction === 'EAST' && newArr[newArr.length-1] === 'WEST')) {
        //console.log(`newArr: ${newArr}. Current direction ${direction}. Popping last element.`)
        newArr.pop();
      }else {
        //console.log(`newArr: ${newArr}. Pushing ${direction}.`);
        newArr.push(direction);
      }
    }
    return newArr;
    
  }