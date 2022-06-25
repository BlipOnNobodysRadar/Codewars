// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
// Alternate capitalization

function capitalize(s) {
  return [
    s
      .split("")
      .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c))
      .join(""),
    s
      .split("")
      .map((c, i) => (i % 2 === 0 ? c : c.toUpperCase()))
      .join(""),
  ];
}
