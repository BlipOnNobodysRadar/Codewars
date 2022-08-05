// 7 kyu Don't give me five!
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) count++;
  }

  return count;
}
