// 7 kyu Find Duplicates
function duplicates(arr) {
  let set = new Set();
  let dups = new Set();
  for (let el of arr) {
    if (set.has(el)) dups.add(el);
    set.add(el);
  }
  return Array.from(dups);
}
