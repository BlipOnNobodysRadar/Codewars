// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
    const oddArr = array.filter(val => val % 2 !==0).sort((a,b) => a - b);
    let oddIndex = 0;
    for(let i = 0; i < array.length; i++) {
      if(array[i] % 2 !== 0) {
        array[i] = oddArr[oddIndex];
        oddIndex++;
      }
    }
    return array;
  }