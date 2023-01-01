// 7 kyu Evens times last
function evenLast(numbers) {
  return numbers.length > 0
    ? numbers.reduce(
        (sum, num, index) => (index % 2 === 0 ? sum + num : sum),
        0
      ) * numbers[numbers.length - 1]
    : 0;
}
