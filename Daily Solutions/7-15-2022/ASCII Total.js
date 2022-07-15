// ASCII Total
// https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript
function uniTotal(string) {
  return string.split("").reduce((sum, c) => c.charCodeAt() + sum, 0);
}
