// 7 kyu Count all the sheep on farm in the heights of New Zealand
function lostSheep(friday, saturday, total) {
  return total - friday.concat(saturday).reduce((sum, count) => sum + count, 0);
}
