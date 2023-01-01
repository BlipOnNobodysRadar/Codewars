// 7 kyu Holiday III - Fire on the boat
function fireFight(s) {
  return s
    .split(" ")
    .map((word) => (word === "Fire" ? "~~" : word))
    .join(" ");
}
