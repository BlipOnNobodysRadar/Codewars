// 8 kyu Simple Fun #261 Whose Move
function whoseMove(lastPlayer, win) {
  const swap = { black: "white", white: "black" };
  return win ? lastPlayer : swap[lastPlayer];
}
