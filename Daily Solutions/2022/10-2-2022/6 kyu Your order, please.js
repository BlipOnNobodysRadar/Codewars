// 6 kyu Your order, please
function order(words) {
  if (words === "") return "";
  const wordArr = words.split(" ");
  const nums = wordArr.map((word) => Number(word.match(/[0-9]/g).join("")));
  const sorted = new Array(wordArr.length - 1).fill("");
  wordArr.forEach((word, i) => (sorted[nums[i] - 1] = word));
  return sorted.join(" ");
}
