// Discover The Original Price (7kyu)
// https://www.codewars.com/kata/552564a82142d701f5001228/train/javascript

function discoverOriginalPrice(discountedPrice, salePercentage) {
  return Number((discountedPrice / (1 - salePercentage / 100)).toFixed(2));
}
