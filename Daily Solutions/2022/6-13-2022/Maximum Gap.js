function maxGap(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  return sorted.reduce((bigDiff, num, index) => {
    if (index !== numbers.length - 1) {
      const thisDiff = Math.abs(Math.abs(num) - Math.abs(numbers[index + 1]));
      return thisDiff > bigDiff ? thisDiff : bigDiff;
    }
    return bigDiff;
  }, -Infinity);
}
