// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript

function dashatize(num) {
  return !Number.isInteger(num)
    ? 'NaN'
    : Math.abs(num)
        .toString()
        .split('')
        .map((d) => (Number(d) % 2 === 0 ? d : `-${d}-`))
        .join('')
        .split('-')
        .filter((v) => v !== '')
        .join('-');
}
console.log(dashatize(274));

// Could be made more concise.
