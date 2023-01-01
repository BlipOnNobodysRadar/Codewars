// 7 kyu Likes Vs Dislikes
function likeOrDislike(buttons) {
  if (buttons.length === 0) return "Nothing";
  const finalButton = buttons[buttons.length - 1];
  if (buttons[buttons.length - 2] !== finalButton) return finalButton;
  let index = buttons.length - 1;
  const sequence = [];
  while (buttons[index] === finalButton) {
    sequence.push(buttons[index]);
    index--;
  }
  return sequence.length % 2 === 0 ? "Nothing" : finalButton;
}
// easier but slower solution (better for this case regardless imo)
/*
function likeOrDislike(buttons) {
  let state = 'Nothing';

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i] === state) {
      state = 'Nothing'
    } else {
      state = buttons[i]
    }
  }

  return state
}
*/
