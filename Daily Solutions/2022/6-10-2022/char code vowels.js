// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

function isVow(a) {
  let vowelCode = ['a', 'e', 'i', 'o', 'u'].map((c) => c.charCodeAt(c));
  return a.map((n) => (vowelCode.includes(n) ? String.fromCharCode(n) : n));
}
