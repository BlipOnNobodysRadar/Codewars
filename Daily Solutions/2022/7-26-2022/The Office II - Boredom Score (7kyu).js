// The Office II - Boredom Score (7kyu)
// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

function boredom(staff) {
  const boredomScore = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  let sum = 0;
  for (const key in staff) {
    sum += boredomScore[staff[key]];
  }
  return sum > 100
    ? "party time!!"
    : sum <= 80
    ? "kill me now"
    : "i can handle this";
}
