// 8 kyu FIXME: Replace all dots
var replaceDots = function (str) {
  return str
    .split("")
    .map((c) => (c === "." ? "-" : c))
    .join("");
};
