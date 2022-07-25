// Sort by Last Char (7kyu)
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript
function last(x) {
  return x
    .split(" ")
    .sort((a, b) =>
      a[a.length - 1] > b[b.length - 1]
        ? 1
        : a[a.length - 1] === b[b.length - 1]
        ? 0
        : -1
    );
}
