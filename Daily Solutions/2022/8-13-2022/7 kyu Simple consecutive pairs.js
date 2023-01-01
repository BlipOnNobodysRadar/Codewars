// 7 kyu Simple consecutive pairs
function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i + 1] === undefined) return count;
    if (Math.abs(ar[i] - ar[i + 1]) === 1) count++;
  }
  return count;
}
