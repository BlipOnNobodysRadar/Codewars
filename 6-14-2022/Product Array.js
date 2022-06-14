// https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript

function productArray(numbers) {
  const prod = numbers.map((num, index) => {
    let prodArr = numbers.filter((n, i) => i !== index);
    return prodArr.reduce((tot, n) => tot * n);
  });
  return prod;
}
