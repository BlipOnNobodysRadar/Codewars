// https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript

function defineSuit(card) {
    let obj = {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥' : 'hearts',
      '♠' : 'spades'
    }
    return obj[card.slice(-1)];
    // good luck
  }