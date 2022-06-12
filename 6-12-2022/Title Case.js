// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

function titleCase(title, minorWords) {
  return title.length > 0
    ? title
        .toLowerCase()
        .split(' ')
        .map((w, i) =>
          i !== 0 &&
          minorWords &&
          minorWords.toLowerCase().split(' ').includes(w)
            ? w
            : w.slice(0, 1).toUpperCase() + w.slice(1)
        )
        .join(' ')
    : '';
}
console.log(titleCase('a clash of KINGS', 'a an the of'));
