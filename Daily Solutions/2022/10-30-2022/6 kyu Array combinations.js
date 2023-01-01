// 6 kyu Array combinations
function solve(arr) {
  const unique = arr.map((subarr) => new Set(subarr));
  return unique.reduce((total, set) => set.size * total, 1);
}
