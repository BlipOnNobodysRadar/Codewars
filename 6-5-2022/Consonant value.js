// https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

function solve(s) {
  // I refuse to use regex.
  const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let subStrings = s
    .split('a')
    .join(',')
    .split('e')
    .join(',')
    .split('i')
    .join(',')
    .split('o')
    .join(',')
    .split('u')
    .join(',')
    .split(',');
  const subStrVals = new Array();
  for (const substring of subStrings) {
    let strength = 0;
    for (const c of substring) {
      strength += alph.indexOf(c) + 1;
    }
    subStrVals.push(strength);
  }
  return Math.max(...subStrVals);
}
console.log(solve('chruschtschov'));
