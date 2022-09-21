// 7 kyu Numerical Palindrome #1
function palindrome(num) {
  if (typeof num !== "number" || num < 0) return "Not valid";
  return String(num) === String(num).split("").reverse().join("");
}
