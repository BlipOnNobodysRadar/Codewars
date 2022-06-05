// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript
function validateUsr(username) {
  if (username.length < 4 || username.length > 16) return false;
  const validIn = 'abcdefghijklmnopqrstuvwxyz0123456789_'.split('');
  let valid = true;
  for (const char of username.split('')) {
    if (!validIn.includes(char)) return false;
  }
  return valid;
}
