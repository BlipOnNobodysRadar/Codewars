// 7 kyu Interview Question (easy)
function getStrings(city) {
  let cityArr = city.toLowerCase().split("");
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const counts = {};
  for (let c of cityArr) {
    if (alpha.includes(c)) {
      counts[c] = counts[c] ? counts[c] + "*" : "*";
    }
  }
  let arr = [];
  for (let key in counts) {
    arr.push(`${key}:${counts[key]}`);
  }
  return arr.join(",");
}
