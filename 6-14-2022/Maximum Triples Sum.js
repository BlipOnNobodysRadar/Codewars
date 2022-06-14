// https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript

function maxTriSum(numbers) {
  const sorted = Array.from(new Set(numbers)).sort((a, b) => b - a);
  return sorted.slice(0, 3).reduce((a, b) => a + b);
}
