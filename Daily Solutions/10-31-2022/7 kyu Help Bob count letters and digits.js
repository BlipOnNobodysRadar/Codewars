// 7 kyu Help Bob count letters and digits
function countLettersAndDigits(input) {
  const matches = input.match(/[a-z0-9]/gi);
  return matches ? matches.length : 0;
}
