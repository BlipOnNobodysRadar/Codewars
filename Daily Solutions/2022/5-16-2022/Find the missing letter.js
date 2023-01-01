// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
function findMissingLetter(array)
{
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let lastLetter = array[0].toLowerCase();
  for(let i = 1; i < array.length; i++) {
    if (alpha.indexOf(array[i].toLowerCase()) - alpha.indexOf(lastLetter) !== 1) {
     return array[0] === array[0].toUpperCase() ? alpha[alpha.indexOf(lastLetter)+1].toUpperCase() : alpha[alpha.indexOf(lastLetter)+1];
    }
    lastLetter = array[i].toLowerCase();
  }
}