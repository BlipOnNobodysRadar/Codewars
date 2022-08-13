// 6 kyu
// A Rule of Divisibility by 13
function thirt(n) {
  const pattern = [1, 10, 9, 12, 3, 4];
  const nDigits = n
    .toString()
    .split("")
    .map((c) => Number(c));
  let pIndex = 0;
  let sum = 0;
  for (let i = nDigits.length - 1; i >= 0; i--) {
    const patternDigit = pattern[pIndex % 6];
    pIndex++;

    sum += patternDigit * nDigits[i];
  }
  return sum === n ? sum : thirt(sum);
}
