// 7 kyu Last Survivor.js
function lastSurvivor(letters, coords) {
  while (letters.length > 1) {
    const letArr = letters.split("");
    letArr.splice(coords.shift(), 1);
    letters = letArr.join("");
  }
  return letters;
}
