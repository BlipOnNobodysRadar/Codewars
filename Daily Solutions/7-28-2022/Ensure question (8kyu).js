// Ensure question (8kyu)
// https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript

function ensureQuestion(s) {
  return s.endsWith("?") ? s : s + "?";
}
