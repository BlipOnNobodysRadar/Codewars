// Digits explosion (7kyu)
// https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript

function explode(s) {
  return s.split("").reduce((str, d) => str + d.repeat(Number(d)), "");
}
