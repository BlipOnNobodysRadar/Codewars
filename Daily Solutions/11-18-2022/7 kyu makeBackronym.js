// 7 kyu makeBackronym
var makeBackronym = function (string) {
  return string
    .split("")
    .map((l) => dict[l.toUpperCase()])
    .join(" ");
};
