// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

function flattenAndSort(array) {
    return array.reduce((newA, oldA) => newA.concat(oldA),[]).sort((a,b)=>a-b);
  }

  