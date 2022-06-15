// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

function solve(arr) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let matchCounts = new Array(arr.length).fill(0);
  arr.forEach((word, index) => {
    word
      .toLowerCase()
      .split('')
      .forEach((l, i) => {
        if (i === alpha.indexOf(l)) {
          matchCounts[index] = matchCounts[index] + 1;
        }
      });
  });
  return matchCounts;
}
