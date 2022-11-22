// 7 kyu Filter Long Words
function filterLongWords(sentence, n) {
  return sentence.split(" ").filter((word) => word.length > n);
}
