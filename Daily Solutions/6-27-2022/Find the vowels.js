// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
// Find the vowels

function vowelIndices(word) {
  const vowels = ["a", "i", "o", "u", "e", "y"];
  const indexes = [];
  word.split("").forEach((c, i) => {
    if (vowels.includes(c.toLowerCase())) {
      indexes.push(i + 1);
    }
  });
  return indexes;
}
