// 7 kyu Formatting decimal places #1
function twoDecimalPlaces(number) {
  let stringSplit = String(number).split(".");
  stringSplit[1] = stringSplit[1].slice(0, 2);
  return Number(stringSplit.join("."));
}
