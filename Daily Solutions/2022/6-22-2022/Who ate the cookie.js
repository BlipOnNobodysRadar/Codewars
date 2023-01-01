// https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript
// Who ate the cookie

function cookie(x) {
  const name =
    typeof x === 'string'
      ? 'Zach'
      : typeof x === 'number'
      ? 'Monica'
      : 'the dog';
  return `Who ate the last cookie? It was ${name}!`;
}
