// 6 kyu Remove the parentheses
function removeParentheses(s) {
  let openParenthesis = [];
  let splitS = s.split("");
  let length = splitS.length;
  for (let i = 0; i < length; i++) {
    if (splitS[i] === "(") {
      openParenthesis.push("(");
      splitS.splice(i, 1);
      i--;
      length--;
      continue;
    }
    if (openParenthesis.length >= 1) {
      if (splitS[i] === ")") {
        openParenthesis.pop();
      }
      splitS.splice(i, 1);
      i--;
      length--;
    }
  }
  return splitS.join("");
}
