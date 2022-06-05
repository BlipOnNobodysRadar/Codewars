// https://www.codewars.com/kata/5761a717780f8950ce001473/solutions/javascript
function calculateAge(birthYear, endYear) {
  if (birthYear === endYear) return 'You were born this very year!';
  let s = Math.abs(birthYear - endYear) === 1 ? '' : 's';
  return birthYear < endYear
    ? `You are ${endYear - birthYear} year${s} old.`
    : `You will be born in ${birthYear - endYear} year${s}.`;
}
