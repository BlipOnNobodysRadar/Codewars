// 8 kyu Simple Change Machine
function changeMe(moneyIn) {
  const conv = {
    "£5": 500,
    "£2": 200,
    "£1": 100,
    "50p": 50,
    "20p": 20,
  };
  if (!conv[moneyIn]) return moneyIn;
  let num = conv[moneyIn];
  let count20 = 0;
  let count10 = 0;
  while (num >= 20) {
    num -= 20;
    count20++;
  }
  while (num >= 10) {
    num -= 10;
    count10++;
  }
  let arr = [];
  for (let i = 0; i < count20; i++) {
    arr.push(`20p`);
  }
  for (let i = 0; i < count10; i++) {
    arr.push(`10p`);
  }
  return arr.join(" ");
}
