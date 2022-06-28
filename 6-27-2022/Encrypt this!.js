// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
// Encrypt this!

var encryptThis = function (text) {
  return text
    .split(" ")
    .map((w) => encryptWord(w))
    .join(" ");
};

function encryptWord(text) {
  const second = text[1];
  const last = text[text.length - 1];
  const textChange = text.split("");
  textChange[1] = last;
  textChange[textChange.length - 1] = second;
  textChange[0] = textChange[0].charCodeAt(0);
  return textChange.join("");
}
