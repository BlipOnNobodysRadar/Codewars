//Build a square
function generateShape(integer) {
  let returnStr = "";
  for (let i = 1; i < integer; i++) {
    returnStr += "+".repeat(integer) + "\n";
  }
  returnStr += "+".repeat(integer);
  return returnStr;
}
