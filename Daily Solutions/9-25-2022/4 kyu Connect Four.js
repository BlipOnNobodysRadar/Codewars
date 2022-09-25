// 4 kyu Connect Four
function whoIsWinner(piecesPositionList) {
  const turns = piecesPositionList.length;
  const dict = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
  // make board
  const board = {};
  for (let i = 1; i <= 6; i++) {
    board["row" + i] = new Array(7).fill(" ");
  }
  // play game
  for (let i = 1; i <= turns; i++) {
    let winner = makeEntry(piecesPositionList.shift());
    if (winner) {
      return winner === "R" ? "Red" : "Yellow";
    }
  }
  return "Draw";
  // helper
  function makeEntry(entry) {
    const col = dict[entry[0]];
    const color = entry[2];
    let row;
    if (board.row6[col] === " ") {
      board.row6[col] = color;
      row = 6;
    } else if (board.row5[col] === " ") {
      board.row5[col] = color;
      row = 5;
    } else if (board.row4[col] === " ") {
      board.row4[col] = color;
      row = 4;
    } else if (board.row3[col] === " ") {
      board.row3[col] = color;
      row = 3;
    } else if (board.row2[col] === " ") {
      board.row2[col] = color;
      row = 2;
    } else if (board.row1[col] === " ") {
      board.row1[col] = color;
      row = 1;
    }
    return checkWin();
    function checkWin() {
      //horizontal
      if (
        (board["row" + row][col + 1] === color &&
          board["row" + row][col + 2] === color &&
          board["row" + row][col + 3] === color) ||
        (board["row" + row][col - 1] === color &&
          board["row" + row][col - 2] === color &&
          board["row" + row][col - 3] === color) ||
        (board["row" + row][col - 1] === color &&
          board["row" + row][col + 1] === color &&
          board["row" + row][col + 2] === color) ||
        (board["row" + row][col + 1] === color &&
          board["row" + row][col - 1] === color &&
          board["row" + row][col - 2] === color)
      ) {
        return color;
      }
      //vertical
      if (
        (board["row" + (row + 1)] &&
          board["row" + (row + 2)] &&
          board["row" + (row + 3)] &&
          board["row" + (row + 1)][col] === color &&
          board["row" + (row + 2)][col] === color &&
          board["row" + (row + 3)][col] === color) ||
        (board["row" + (row - 1)] &&
          board["row" + (row - 2)] &&
          board["row" + (row - 3)] &&
          board["row" + (row - 1)][col] === color &&
          board["row" + (row - 2)][col] === color &&
          board["row" + (row - 3)][col] === color) ||
        (board["row" + (row + 1)] &&
          board["row" + (row - 1)] &&
          board["row" + (row - 2)] &&
          board["row" + (row + 1)][col] === color &&
          board["row" + (row - 1)][col] === color &&
          board["row" + (row - 2)][col] === color) ||
        (board["row" + (row - 1)] &&
          board["row" + (row + 1)] &&
          board["row" + (row + 2)] &&
          board["row" + (row - 1)][col] === color &&
          board["row" + (row + 1)][col] === color &&
          board["row" + (row + 2)][col] === color)
      ) {
        return color;
      }
      //diagonal
      if (
        (board["row" + (row + 1)] &&
          board["row" + (row + 2)] &&
          board["row" + (row + 3)] &&
          board["row" + (row + 1)][col - 1] === color &&
          board["row" + (row + 2)][col - 2] === color &&
          board["row" + (row + 3)][col - 3] === color) ||
        (board["row" + (row + 1)] &&
          board["row" + (row + 2)] &&
          board["row" + (row + 3)] &&
          board["row" + (row + 1)][col + 1] === color &&
          board["row" + (row + 2)][col + 2] === color &&
          board["row" + (row + 3)][col + 3] === color) ||
        (board["row" + (row - 1)] &&
          board["row" + (row - 2)] &&
          board["row" + (row - 3)] &&
          board["row" + (row - 1)][col + 1] === color &&
          board["row" + (row - 2)][col + 2] === color &&
          board["row" + (row - 3)][col + 3] === color) ||
        (board["row" + (row - 1)] &&
          board["row" + (row - 2)] &&
          board["row" + (row - 3)] &&
          board["row" + (row - 1)][col - 1] === color &&
          board["row" + (row - 2)][col - 2] === color &&
          board["row" + (row - 3)][col - 3] === color) ||
        (board["row" + (row + 1)] &&
          board["row" + (row - 1)] &&
          board["row" + (row - 2)] &&
          board["row" + (row + 1)][col - 1] === color &&
          board["row" + (row - 1)][col + 1] === color &&
          board["row" + (row - 2)][col + 2] === color) ||
        (board["row" + (row + 1)] &&
          board["row" + (row - 1)] &&
          board["row" + (row - 2)] &&
          board["row" + (row + 1)][col + 1] === color &&
          board["row" + (row - 1)][col - 1] === color &&
          board["row" + (row - 2)][col - 2] === color) ||
        (board["row" + (row - 1)] &&
          board["row" + (row + 1)] &&
          board["row" + (row + 2)] &&
          board["row" + (row - 1)][col + 1] === color &&
          board["row" + (row + 1)][col - 1] === color &&
          board["row" + (row + 2)][col - 2] === color) ||
        (board["row" + (row - 1)] &&
          board["row" + (row + 1)] &&
          board["row" + (row + 2)] &&
          board["row" + (row - 1)][col - 1] === color &&
          board["row" + (row + 1)][col + 1] === color &&
          board["row" + (row + 2)][col + 2] === color)
      ) {
        return color;
      }
    }
  }
}
