// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

function rowWeights(array) {
  const newArray = [0, 0];
  array.forEach((el, i) =>
    i % 2 === 0
      ? (newArray[0] = newArray[0] + el)
      : (newArray[1] = newArray[1] + el)
  );
  return newArray;
}
