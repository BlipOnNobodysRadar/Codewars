// https://www.codewars.com/kata/5ba38ba180824a86850000f7/javascript
// Simple remove duplicates

function solve(arr) {
  return Array.from(new Set(arr.reverse())).reverse();
}
