// 7 kyu Averages of numbers
function averages(numbers) {
  const averages = [];
  if (!numbers || numbers.length < 2) return averages;
  for (let i = 0; i < numbers.length - 1; i++) {
    averages.push((numbers[i] + numbers[i + 1]) / 2);
  }
  return averages;
}
