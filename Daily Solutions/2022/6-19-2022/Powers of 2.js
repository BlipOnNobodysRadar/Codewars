function isPowerOfTwo(n) {
  if (n === 2 || n === 1) return true;
  if (n < 2) return false;
  return isPowerOfTwo(n / 2);
}
