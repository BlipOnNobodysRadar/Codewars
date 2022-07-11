// Sort Out The Men From Boys
// https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript
function menFromBoys(arr) {
  const evens = arr.filter((n) => n % 2 === 0).sort((a, b) => a - b);
  const odds = arr.filter((n) => n % 2 !== 0).sort((a, b) => b - a);
  return Array.from(new Set(evens.concat(odds)));
}
