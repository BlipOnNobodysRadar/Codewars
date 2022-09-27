// 7 kyu Alphabetical Addition
function addLetters(...letters) {
  if (letters.length === 0) return "z";
  const letterValue =
    (letters.reduce((sum, letter) => letter.charCodeAt() + sum, 0) -
      96 * letters.length) %
    26;
  return letterValue === 0 ? "z" : String.fromCharCode(letterValue + 96);
}
