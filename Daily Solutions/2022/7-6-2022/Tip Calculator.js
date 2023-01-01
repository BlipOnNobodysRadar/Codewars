// https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript
// Tip Calculator

function calculateTip(amount, rating) {
  rating = rating.toLowerCase();
  const tips = {
    terrible: 0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.2,
  };
  return tips[rating] || tips[rating] === 0
    ? Math.ceil(amount * tips[rating])
    : "Rating not recognised";
}
