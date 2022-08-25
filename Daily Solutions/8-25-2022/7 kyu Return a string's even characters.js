// 7 kyu Return a string's even characters.
function evenChars(string) {
  return string.length < 2 || string.length > 100
    ? "invalid string"
    : string.split("").filter((c, i) => i % 2 !== 0);
}
