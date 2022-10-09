// 6 kyu Where is my parent!(cry).js
function findChildren(dancingBrigade) {
  let str = "";
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const counts = {};
  dancingBrigade.split("").forEach((c) => {
    counts[c] ? (counts[c] = counts[c] + 1) : (counts[c] = 1);
  });
  alpha.forEach((letter) => {
    if (counts[letter.toUpperCase()]) {
      str += letter.toUpperCase().repeat(counts[letter.toUpperCase()]);
      str += letter.repeat(counts[letter]);
    }
  });
  return str;
}
