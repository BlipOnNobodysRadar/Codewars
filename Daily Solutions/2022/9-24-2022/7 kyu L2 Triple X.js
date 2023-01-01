// 7 kyu L2 Triple X
function tripleX(str) {
  const xLoc = str.indexOf("x");
  return str[xLoc + 1] === "x" && str[xLoc + 2] === "x";
}
