// 7 kyu Building Strings From a Hash
function solution(pairs) {
  let arr = [];
  for (const key in pairs) {
    arr.push(`${key} = ${pairs[key]}`);
  }
  return arr.join();
}
