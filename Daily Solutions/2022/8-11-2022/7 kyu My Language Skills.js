// 7 kyu My Language Skills
function myLanguages(results) {
  let arr = [];
  for (const key in results) {
    if (results[key] >= 60) arr.push([results[key], key]); // pushes result paired with key if above 60
  }
  return arr.sort((a, b) => b[0] - a[0]).map((pair) => pair[1]); //sorts in descending order based on grade, then maps to only the keys
}
