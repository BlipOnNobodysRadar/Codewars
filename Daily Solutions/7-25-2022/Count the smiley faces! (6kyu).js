// Count the smiley faces! (6kyu)
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
function countSmileys(arr) {
  return arr.reduce((count, str) => (isSmiley(str) ? count + 1 : count), 0);
  function isSmiley(str) {
    if (str.length > 3 || str.length < 2) return false;
    if (str[0] !== ":" && str[0] !== ";") return false;
    if (str[str.length - 1] !== ")" && str[str.length - 1] !== "D")
      return false;
    if (str.length === 3 && str[1] !== "-" && str[1] !== "~") return false;
    return true;
  }
}
