// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  /*return sonYearsOld * 2 < dadYearsOld / 2
    ? dadYearsOld - sonYearsOld * 2
    : sonYearsOld * 2 - dadYearsOld;
  */
  return Math.abs(sonYearsOld * 2 - dadYearsOld);
}
