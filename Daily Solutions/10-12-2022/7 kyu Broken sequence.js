// 7 kyu Broken sequence
function findMissingNumber(sequence) {
  if (sequence === "") return 0;
  let arr = sequence.split(" ").map((el) => Number(el));
  arr.sort((a, b) => a - b);
  console.log(arr);
  if (arr[0] !== 1 || arr.includes(NaN)) return 1;
  let last = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - last !== 1) return last + 1;
    last = arr[i];
  }
  return 0;
}
