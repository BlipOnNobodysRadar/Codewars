// 8 kyu Heads and Legs
function animals(heads, legs) {
  if (legs >= 2 * heads && legs % 2 === 0) {
    let cows = legs / 2 - heads;
    let chickens = heads - cows;
    // cows > 0, is int, same for chickens
    if (
      cows >= 0 &&
      Number.isInteger(cows) &&
      chickens >= 0 &&
      Number.isInteger(chickens)
    ) {
      return [chickens, cows];
    }
  }
  return "No solutions";
}
