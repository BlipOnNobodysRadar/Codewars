// 7 kyu Average Scores
function average(scores) {
  return Math.round(scores.reduce((sum, num) => sum + num, 0) / scores.length);
}
