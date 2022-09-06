// 7 kyu 16+18=214
function add(num1, num2) {
  let newArr = [];
  let num1digits = num1
    .toString()
    .split("")
    .map((d) => +d)
    .reverse();
  let num2digits = num2
    .toString()
    .split("")
    .map((d) => +d)
    .reverse();
  let biggest = num1 > num2 ? num1digits : num2digits;
  let smallest = num1 < num2 ? num1digits : num2digits;
  biggest.forEach((num, index) => {
    newArr.push(num + (smallest[index] || 0));
  });
  return Number(
    newArr
      .reverse()
      .map((num) => String(num))
      .join("")
  );
}
