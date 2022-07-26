// Thinkful - Number Drills Blue and red marbles (8kyu)
// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b/train/javascript
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (
    (blueStart - bluePulled) / (blueStart - bluePulled + redStart - redPulled)
  );
}
