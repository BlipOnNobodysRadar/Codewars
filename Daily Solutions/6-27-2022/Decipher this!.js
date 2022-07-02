// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
// Decipher this!
var decipherThis = function (text) {
  return text
    .split(" ")
    .map((w) => decipherWord(w))
    .join(" ");
};

function decipherWord(text) {
  const textChange = text.split("");
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const sliceEnd = textChange.some((c) => alpha.includes(c.toLowerCase()))
    ? textChange.findIndex((c) => alpha.includes(c.toLowerCase()))
    : text.length;
  const charCode = text.slice(0, sliceEnd);
  textChange.splice(0, charCode.length, String.fromCharCode(charCode));
  const second = textChange[1];
  const last = textChange[textChange.length - 1];
  textChange[1] = last;
  textChange[textChange.length - 1] = second;
  return textChange.join("");
}
