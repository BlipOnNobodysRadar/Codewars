// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

function reverseLetter(str) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return str
    .split('')
    .filter((c) => alph.includes(c))
    .reverse()
    .join('');
}
