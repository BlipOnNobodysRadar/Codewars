// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript

function dashatize(num) {
  if (!Number.isInteger(num)) return 'NaN';
  let returnStr = Math.abs(num)
    .toString()
    .split('')
    .map((d) => (Number(d) % 2 === 0 ? d : `-${d}-`))
    .join('');
  if (returnStr.startsWith('-')) returnStr = returnStr.slice(1);
  if (returnStr.endsWith('-')) returnStr = returnStr.slice(0, -1);
  returnStr = returnStr
    .split('-')
    .filter((v) => v !== '')
    .join('-');
  return returnStr;
}
console.log(dashatize(274));
