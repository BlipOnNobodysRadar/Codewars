// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

/*
Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/
const rps = (p1, p2) => {
    if(p1 === p2) return 'Draw!';
    if(p1 === 'rock') {
      return p2 === 'scissors' ? 'Player 1 won!' : 'Player 2 won!';
    }
    if(p1 === 'paper') {
      return p2 === 'rock' ? 'Player 1 won!' : 'Player 2 won!';
    }
    if(p1 === 'scissors') {
      return p2 === 'paper' ? 'Player 1 won!' : 'Player 2 won!';
    }
  };