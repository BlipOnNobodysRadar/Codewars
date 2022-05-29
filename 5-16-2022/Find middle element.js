// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
function gimme (triplet) {
    return triplet.indexOf(triplet.slice().sort((a,b) => a-b)[1]);
  }