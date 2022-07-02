// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

function validate(password) {
  let alph = 'abcdefghijklmnaopqrstuvwxyz';
  let nums = '1234567890'.split('');
  let allValid = alph.split('') + alph.toUpperCase().split('') + nums;

  return (
    password.length >= 6 &&
    password.split('').every((c) => allValid.includes(c)) &&
    password.split('').some((c) => alph.split('').includes(c)) &&
    password.split('').some((c) => alph.toUpperCase().split('').includes(c)) &&
    password.split('').some((c) => nums.includes(c))
  );
}
