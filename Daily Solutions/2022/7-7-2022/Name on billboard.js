// https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
// Name on billboard
function billboard(name, price = 30) {
  return name.split("").reduce((sum, c) => sum + price, 0);
}
