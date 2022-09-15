// 7 kyu Last Survivor.js
function lastSurvivor(letters, coords) {
  while (letters.length > 1) {
    letters = letters.split("").splice(coords.shift()).join("");
  }
  return letters;
}
