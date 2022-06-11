// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

function findLongest(array) {
  let max = -Infinity;
  let lengths = array.map((n) => {
    const l = n.toString().length;
    if (l > max) max = l;
    return l;
  });
  return array[lengths.indexOf(max)];
}
