//https://www.codewars.com/kata/554a44516729e4d80b000012/train/javascript
function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let months = 0;
  let savedMoney = 0;
  let oldCarPrice = startPriceOld;
  let newCarPrice = startPriceNew;
  let lossPercentage = percentLossByMonth;
  let available = oldCarPrice + savedMoney - newCarPrice;
  while (available < 0) {
    months++;
    if (months !== 0 && months % 2 === 0) lossPercentage += 0.5;
    savedMoney += savingperMonth;
    oldCarPrice -= oldCarPrice * (lossPercentage / 100);
    newCarPrice -= newCarPrice * (lossPercentage / 100);
    available = oldCarPrice + savedMoney - newCarPrice;
  }
  return [months, Math.round(available)];
}
