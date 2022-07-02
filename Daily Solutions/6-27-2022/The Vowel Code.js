// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
// The Vowel Code

function encode(string) {
  const vSwap = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return string
    .split("")
    .map((d) => (vSwap[d] ? vSwap[d] : d))
    .join("");
}

function decode(string) {
  const vSwap = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "o" };
  return string
    .split("")
    .map((d) => (vSwap[d] ? vSwap[d] : d))
    .join("");
}
