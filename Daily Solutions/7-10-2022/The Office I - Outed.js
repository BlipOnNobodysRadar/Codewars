// The Office I - Outed
// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript
function outed(meet, boss) {
  let count = 0;
  let sum = 0;
  for (let person in meet) {
    count++;
    sum += person === boss ? meet[person] * 2 : meet[person];
  }
  console.log(`${count} ${sum} ${sum / count}`);
  return sum / count <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
