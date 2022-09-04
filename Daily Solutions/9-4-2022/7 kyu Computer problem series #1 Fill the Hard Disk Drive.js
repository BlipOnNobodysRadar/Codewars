// 7 kyu Computer problem series #1: Fill the Hard Disk Drive
function save(sizes, hd) {
  let count = 0;
  let sum = 0;
  while (sum < hd) {
    sum += sizes[count];
    if (sum <= hd) {
      count++;
    }
  }
  return count;
}
