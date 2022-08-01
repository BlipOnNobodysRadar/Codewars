// Find numbers which are divisible by given number (8kyu)
function divisibleBy(numbers, divisor) {
  return numbers.filter((n) => n % divisor === 0);
}
