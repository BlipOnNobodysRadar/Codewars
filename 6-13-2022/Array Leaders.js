// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

function arrayLeaders(numbers) {
  const leaders = [];
  numbers.forEach((num, index) => {
    if (index !== numbers.length - 1) {
      if (num > numbers.slice(index + 1).reduce((sum, val) => sum + val))
        leaders.push(num);
    }
  });
  if (numbers[numbers.length - 1] > 0)
    leaders.push(numbers[numbers.length - 1]);
  return leaders;
}
console.log(arrayLeaders([1, 2, 3, 4, 0]));
