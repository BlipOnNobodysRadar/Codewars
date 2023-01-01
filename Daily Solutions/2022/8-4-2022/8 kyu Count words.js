// 8 kyu Count words
function countWords(str) {
  str = str.toLowerCase();
  // establish valid non-deliminator characters, lowercase only for ease.
  const nonDelim = "abcdefghijklmnopqrstuvwxyz-'`0123456789".split("");
  // Partially deliminates the string by converting non-delim chars into whitespace
  let deliminated = str
    .split("")
    .map((c) => (nonDelim.includes(c) ? c : " "))
    .join("");
  // Completes delimination process by "cleaning" the string of any "empty" (whitespace only) entries
  let cleaned = deliminated.split(" ").filter((s) => s.trim() !== "");
  return cleaned.length;
}
