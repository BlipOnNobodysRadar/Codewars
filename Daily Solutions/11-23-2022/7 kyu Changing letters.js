// 7 kyu Changing letters
function swap(string) {
  const vowels = "aeiou";
  return string
    .split("")
    .map((c) => (vowels.includes(c) ? c.toUpperCase() : c))
    .join("");
}
