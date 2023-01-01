// 4 kyu Pyramid Slide Down
function longestSlideDown(pyramid) {
  let dp = [pyramid[0][0]];
  for (let i = 1; i < pyramid.length; i++) {
    let row = pyramid[i];
    let newDp = [row[0] + dp[0]];

    for (let j = 1; j < row.length - 1; j++) {
      newDp.push(row[j] + Math.max(dp[j - 1], dp[j]));
    }

    newDp.push(row[row.length - 1] + dp[dp.length - 1]);
    dp = newDp;
  }
  return Math.max(...dp);
}
