// 8 kyu Count words
function countWords(str) {
  str = str.toLowerCase();
  // establish valid non-deliminator characters, lowercase only for ease.
  const nonDelim = "abcdefghijklmnopqrstuvwxyz-'`0123456789".split("");
  // deliminates the string
  let deliminated = str
    .split("")
    .map((c) => (nonDelim.includes(c) ? c : " "))
    .join("");
  // cleans the deliminated string of any "empty" (whitespace only) entries
  let cleaned = deliminated.split(" ").filter((s) => s.trim() !== "");
  return cleaned.length;
}
