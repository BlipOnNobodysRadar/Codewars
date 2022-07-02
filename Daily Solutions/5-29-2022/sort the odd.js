// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
    const oddArr = array.filter(val => val % 2 !==0).sort((a,b) => a - b);
    return array.map(val => val % 2 !==0 ? oddArr.shift() : val);
  }