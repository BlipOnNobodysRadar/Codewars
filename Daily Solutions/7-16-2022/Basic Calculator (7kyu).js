// Basic Calculator
// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript

// first solution, unsafe
/*
function calculate(num1, operation, num2) {
  let validOps = { "+": true, "-": true, "/": true, "*": true };
  if (!validOps[operation] || (num2 === 0 && operation === "/")) return null;
  return eval(num1 + operation + num2);
}
*/

// better solution, using concepts from the top clever solution
function calculate(num1, operation, num2) {
  const ops = {
    "+": () => num1 + num2,
    "-": () => num1 - num2,
    "*": () => num1 * num2,
    "/": () => (num2 !== 0 ? num1 / num2 : null),
  };
  return ops[operation] ? ops[operation]() : null;
}
