// 6 kyu String array duplicates
const removeConsecutiveDuplicates = (s) => {
  let last = "";
  let result = [];
  for (let letter of s.split("")) {
    letter !== last ? result.push(letter) : (last = letter);
    last = letter;
  }
  return result.join("");
};
function dup(arr) {
  return arr.map((s) => removeConsecutiveDuplicates(s));
}
