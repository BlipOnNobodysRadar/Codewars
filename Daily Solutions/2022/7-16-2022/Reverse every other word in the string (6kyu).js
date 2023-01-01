// Reverse every other word in the string (6kyu)
// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
function reverse(str) {
  return (
    str
      .trim()
      .split(" ")
      //.map((w) => w.trim())
      //.filter((w) => w !== "")
      .map((w, i) => (i % 2 === 0 ? w : w.split("").reverse().join("")))
      .join(" ")
  );
}
// The two commented lines allow it to handle strings with extra spaces between words.
// Not necessary for the tests in the kata.
