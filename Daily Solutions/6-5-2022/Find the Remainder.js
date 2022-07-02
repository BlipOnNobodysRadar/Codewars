// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript

function remainder(n, m) {
  // Divide the larger argument by the smaller argument and return the remainder
  return n > m ? n % m : m % n;
}
