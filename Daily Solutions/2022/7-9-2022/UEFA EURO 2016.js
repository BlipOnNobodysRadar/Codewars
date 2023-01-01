// UEFA EURO 2016
// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript

function uefaEuro2016(teams, scores) {
  const beginStr = `At match ${teams[0]} - ${teams[1]}, `;
  return scores[0] === scores[1]
    ? beginStr + "teams played draw."
    : scores[0] > scores[1]
    ? beginStr + `${teams[0]} won!`
    : beginStr + `${teams[1]} won!`;
}
