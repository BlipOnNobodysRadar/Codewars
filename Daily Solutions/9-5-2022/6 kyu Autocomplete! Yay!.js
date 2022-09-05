// 6 kyu Autocomplete! Yay!
function autocomplete(input, dictionary) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newInput = input
    .split("")
    .filter((c) => alphabet.includes(c.toLowerCase()))
    .join("");
  return dictionary
    .filter((word) => word.toLowerCase().startsWith(newInput.toLowerCase()))
    .slice(0, 5);
}
