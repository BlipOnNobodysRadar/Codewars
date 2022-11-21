// 7 kyu Remove consecutive duplicate words
const removeConsecutiveDuplicates = (s) => {
  let last = "";
  let result = [];
  for (let word of s.split(" ")) {
    word !== last ? result.push(word) : (last = word);
    last = word;
  }
  return result.join(" ");
};
