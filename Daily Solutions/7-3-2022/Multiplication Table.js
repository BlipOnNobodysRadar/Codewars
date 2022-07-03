multiplicationTable = function (size) {
  // row 1 = multiples of 1 n times
  // row 2 = multiples of 2 n times
  // etc
  const answer = [];
  for (let i = 1; i <= size; i++) {
    let thisArr = [];
    for (let j = 1; j <= size; j++) {
      thisArr.push(i * j);
    }
    answer.push(thisArr);
  }
  return answer;
};
