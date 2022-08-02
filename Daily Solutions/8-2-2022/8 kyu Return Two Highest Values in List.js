// 8 kyu Return Two Highest Values in List

function twoHighest(arr) {
  if (arr.length === 0) return [];
  arr.sort((a, b) => b - a);
  arr = Array.from(new Set(arr));
  return arr.length === 1 ? [arr[0]] : [arr[0], arr[1]];
}
