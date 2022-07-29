// Rainfall (6kyu)
// https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/train/javascript
function mean(town, strng) {
  const towns = parseData(strng);
  return towns[town] ? towns[town].mean : -1;
}
function variance(town, strng) {
  const towns = parseData(strng);
  return towns[town] ? towns[town].variance : -1;
}

function parseData(strng) {
  const towns = strng.split("\n").reduce((towns, entry) => {
    const name = entry.split(":")[0];
    const rainFall = entry
      .split(":")[1]
      .split(",")
      .map((m) => m.split(" ")[1])
      .map((str) => Number(str));
    const average =
      rainFall.reduce((sum, rain) => sum + rain, 0) / rainFall.length;
    const variance =
      rainFall.reduce((sum, rain) => (rain - average) ** 2 + sum, 0) /
      rainFall.length;
    towns[name] = { mean: average, variance: variance };
    return towns;
  }, {});
  return towns;
}
