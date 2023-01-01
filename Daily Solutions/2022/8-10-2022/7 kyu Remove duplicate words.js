// 7 kyu Remove duplicate words
function removeDuplicateWords(s) {
  return Array.from(new Set(s.split(" "))).join(" ");
}
