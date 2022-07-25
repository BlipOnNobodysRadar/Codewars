// Product of consecutive Fib numbers (5kyu)
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

function productFib(prod) {
  // find fib seq pair whose prod is closest to prod, if equal return true. if not return false.
  // go up list of fib seq forming pairs, remember only the last pair and product. When product >= prod, stop.
  // Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
  // wnats answer in form of [f(n), f(n+1), true/false]
  // prod = f(n) * f(n+1)
  // f(n) = prod/f(n+1)
  let pairProduct = 0;
  let pair = [0, 1];
  while (pairProduct < prod) {
    let nextN = pair[0] + pair[1];
    pair[0] = pair[1];
    pair[1] = nextN;
    pairProduct = pair[0] * pair[1];
    if (pairProduct === prod) return [pair[0], pair[1], true];
  }
  return [pair[0], pair[1], false];
}
