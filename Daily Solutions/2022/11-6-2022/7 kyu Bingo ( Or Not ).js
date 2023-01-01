// 7 kyu Bingo ( Or Not )
function bingo(a) {
  return a.includes(2) &&
    a.includes(7) &&
    a.includes(9) &&
    a.includes(14) &&
    a.includes(15)
    ? "WIN"
    : "LOSE";
}

/* better
const bingo = ar => [2,7,9,14,15].every(e => ar.includes(e)) ? 'WIN' : 'LOSE';
*/
