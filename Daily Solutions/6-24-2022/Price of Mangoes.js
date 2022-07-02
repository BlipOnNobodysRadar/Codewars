// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript
// Price of Mangoes

function mango(quantity, price) {
  return quantity % 3 === 0
    ? (quantity / 3) * price * 2
    : Math.floor(quantity / 3) * price * 2 + (quantity % 3) * price;
}
