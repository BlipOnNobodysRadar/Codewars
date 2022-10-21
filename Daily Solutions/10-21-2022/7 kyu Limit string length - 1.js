// 7 kyu Limit string length - 1
function solution(string, limit) {
  return string.length <= limit ? string : string.slice(0, limit) + "...";
}
console.log(solution("Testing String", 3));
console.log(solution("Testing String", 8));
console.log(solution("Test", 8));
