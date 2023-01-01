// 8 kyu Fuel Calculator
function fuelPrice(litres, pricePerLiter) {
  let discount;
  switch (true) {
    case litres >= 10:
      discount = 0.25;
      break;
    case litres >= 8:
      discount = 0.2;
      break;
    case litres >= 6:
      discount = 0.15;
      break;
    case litres >= 4:
      discount = 0.1;
      break;
    case litres >= 2:
      discount = 0.05;
      break;
  }
  return +(litres * (pricePerLiter - discount)).toFixed(2);
}
