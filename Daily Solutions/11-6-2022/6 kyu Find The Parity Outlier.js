// 6 kyu Find The Parity Outlier
function findOutlier(integers) {
  const firstType = integers[0] % 2 === 0 ? "even" : "odd";
  const secondType = integers[1] % 2 === 0 ? "even" : "odd";
  if (firstType === secondType) {
    return firstType === "odd"
      ? integers.find((e) => e % 2 === 0)
      : integers.find((e) => e % 2 !== 0);
  } else {
    const thirdType = integers[2] % 2 === 0 ? "even" : "odd";
    if (firstType === thirdType) {
      return integers[1];
    } else {
      return integers[0];
    }
  }
}
