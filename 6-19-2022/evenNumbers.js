function evenNumbers(array, number) {
  return array
    .reverse()
    .filter((num) => num % 2 === 0)
    .slice(0, number)
    .reverse();
}
