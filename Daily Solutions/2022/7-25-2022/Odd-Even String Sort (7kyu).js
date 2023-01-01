// Odd-Even String Sort (7kyu)
// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

function sortMyString(S) {
  const words = S.split("").reduce(
    (arr, c, i) => {
      let index = i % 2 === 0 ? 0 : 1;
      arr[index].push(c);
      return arr;
    },
    [[], []]
  );
  return words[0].join("") + " " + words[1].join("");
}
