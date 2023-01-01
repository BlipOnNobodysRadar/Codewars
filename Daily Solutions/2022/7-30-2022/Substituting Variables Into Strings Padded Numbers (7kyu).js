// Substituting Variables Into Strings Padded Numbers (7kyu)
// https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript

function solution(value) {
  return "Value is " + value.toString().padStart(5, "0");
}
