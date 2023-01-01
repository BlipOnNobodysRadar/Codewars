// 7 kyu Incrementer
function incrementer(nums) {
  return nums.map((n, i) => {
    const nStr = String(n + i + 1);
    return nStr.length > 1 ? Number(nStr[nStr.length - 1]) : Number(nStr);
  });
}
