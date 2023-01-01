// 7 kyu The average length
function averageLength(arr) {
  const avg = Math.round(
    arr.reduce((sum, str) => str.length + sum, 0) / arr.length
  );
  return arr.map((str) => str[0].repeat(avg));
}
