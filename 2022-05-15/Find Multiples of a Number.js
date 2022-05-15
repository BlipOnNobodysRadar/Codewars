// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(integer, limit) {
    let mults = [];
    for(let i = integer; i <= limit; i+=integer) {
      mults.push(i);
    }
    return mults;
  }
  