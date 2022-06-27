// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
// Highest Rank Number in an Array

function highestRank(arr) {
  const counts = {};
  arr.forEach((n) => (counts[n] === undefined ? (counts[n] = 0) : counts[n]++));
  let maxAmount = 0;
  let maxKey;
  for (key in counts) {
    if (counts[key] === maxAmount && Number(key) > Number(maxKey)) maxKey = key;
    if (counts[key] > maxAmount) {
      maxAmount = counts[key];
      maxKey = key;
    }
  }
  return Number(maxKey);
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
