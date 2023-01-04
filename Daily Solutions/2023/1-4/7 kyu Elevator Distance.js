// 7 kyu Elevator Distance
function elevatorDistance(array) {
  let sum = 0;
  for (let i = 1; i < array.length; i++) {
    sum += Math.abs(array[i] - array[i - 1]);
  }
  return sum;
}
