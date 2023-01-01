// 7 kyu Palindrome chain length
var palindromeChainLength = function (n) {
  let steps = 0;
  let strN = n.toString();
  while (!isPalindrome(strN)) {
    n = Number(strN.split("").reverse().join("")) + n;
    strN = n.toString();
    steps++;
  }
  return steps;
  function isPalindrome(str) {
    return str.split("").reverse().join("") === str;
  }
};
