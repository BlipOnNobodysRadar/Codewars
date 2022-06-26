// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript
// Sum of numbers from 0 to N

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`;
    let sequenceString = "0";
    let sum = 0;
    for (let i = 1; i <= count; i++) {
      sequenceString += `+${i}`;
      sum += i;
    }
    return sum === 0 ? "0=0" : sequenceString + ` = ${sum}`;
  };

  return SequenceSum;
})();
