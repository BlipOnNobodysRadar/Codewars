// 7 kyu Longest vowel chain
function solve(s) {
  const vowels = "aeiou".split("");
  let max = 0;
  let current = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      current++;
    } else {
      if (current > max) max = current;
      current = 0;
    }
  }
  return max;
}
