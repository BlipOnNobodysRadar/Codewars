// 8 kyu Smallest unused ID
function nextId(ids) {
  ids.sort((a, b) => a - b);
  const removeDup = Array.from(new Set(ids));
  for (let i = 0; i <= removeDup.length; i++) {
    if (removeDup[i] !== i) return i;
  }
}
