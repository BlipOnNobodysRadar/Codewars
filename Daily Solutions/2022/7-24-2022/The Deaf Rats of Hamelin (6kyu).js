// The Deaf Rats of Hamelin (6kyu)
// https://www.codewars.com/kata/598106cb34e205e074000031/train/javascript

var countDeafRats = function (town) {
  const townArr = town.split("");
  const piperIndex = townArr.indexOf("P");
  const leftArr = townArr.slice(0, piperIndex);
  const rightArr = townArr.slice(piperIndex);
  let deafRats = 0;
  deafRats += orientTheRats(leftArr)[0];
  deafRats += orientTheRats(rightArr)[1];
  return deafRats;
};

function orientTheRats(arr) {
  const rats = [];
  let init = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "~" || arr[i] === "O") {
      if (init) {
        rats.push([init, arr[i]]);
        init = false;
      } else {
        init = arr[i];
      }
    }
  }
  const counts = rats.reduce(
    (lr, pair) => {
      pair[0] === "O" ? (lr[0] = lr[0] + 1) : (lr[1] = lr[1] + 1);
      return lr;
    },
    [0, 0]
  );
  return counts;
}
