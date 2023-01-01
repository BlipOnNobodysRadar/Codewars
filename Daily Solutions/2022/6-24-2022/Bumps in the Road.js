// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript
// Bumps in the Road

function bump(x) {
  return x.split("").reduce((sum, char) => (char === "n" ? sum + 1 : sum), 0) >
    15
    ? "Car Dead"
    : "Woohoo!";
}
