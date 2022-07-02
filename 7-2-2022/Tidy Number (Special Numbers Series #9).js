// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
// Tidy Number (Special Numbers Series #9)

function tidyNumber(n) {
  let prev;
  return n
    .toString()
    .split("")
    .map((d) => Number(d))
    .every((num, i) => {
      if (i === 0) {
        prev = num;
        return true;
      }
      const valid = num >= prev;
      prev = num;
      return valid;
    });
}
