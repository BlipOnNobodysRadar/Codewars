// 7 kyu Inspiring Strings
function longestWord(stringOfWords) {
  const words = stringOfWords.split(" ");
  let longestWord;
  let maxLetters = 0;
  for (const word of words) {
    if (word.length >= maxLetters) {
      maxLetters = word.length;
      longestWord = word;
    }
  }
  return longestWord;
}
