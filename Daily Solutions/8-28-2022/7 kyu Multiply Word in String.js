// 7 kyu Multiply Word in String
function modifyMultiply(str, loc, num) {
  let word = str.split(" ")[loc];
  let returnVal = [];
  for (let i = 0; i < num; i++) {
    returnVal.push(word);
  }
  return returnVal.join("-");
}
