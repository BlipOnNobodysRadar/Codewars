// 6 kyu longest_palindrome
function longestPalindrome(s) {
  let maxLength = 0;

  //Loop through every possible palindrome in the string
  for (let i = 0; i < s.length; i++) {
    //Odd palindromes
    expandAroundMiddle(s, i, i);
    //Even palindromes
    expandAroundMiddle(s, i, i + 1);
  }

  //Helper function for finding palindromes
  function expandAroundMiddle(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let currentPalLength = right - left + 1;
      if (currentPalLength > maxLength) {
        maxLength = currentPalLength;
      }
      //Check the next palindromes
      left--;
      right++;
    }
  }

  return maxLength;
}
