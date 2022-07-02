// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

function revrot(str, sz) {
  if (sz > str.length || sz <= 0) return '';
  let chunks = [];
  const strArr = str.split('');
  let breaks = 0;
  while (strArr.length > sz) {
    let chunk = strArr.splice(0, sz).join('');
    sumCubeOfDigits(chunk) % 2 === 0
      ? chunks.push(chunk.split('').reverse().join(''))
      : chunks.push(rotateLeft(chunk));
  }
  return chunks.join('');
}
function sumCubeOfDigits(digitStr) {
  return digitStr
    .split('')
    .map((c) => Number(c))
    .reduce((sum, digit) => sum + digit ** 3, 0);
}
function rotateLeft(digitStr) {
  let digitStrArr = digitStr.split('');
  digitStrArr.push(digitStrArr.shift());
  return digitStrArr.join('');
}
