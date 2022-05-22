// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

function isSortedAndHow(array) {
    if(array.every((val, index) => (index - 1 === undefined) ? true : (val >= array[index-1]))) return 'yes, ascending';
    if(array.every((val, index) => (index - 1 === undefined) ? true : (val <= array[index-1]))) return 'yes, descending';
    return 'no';
  }