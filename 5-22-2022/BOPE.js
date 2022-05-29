// https://www.codewars.com/kata/5ab52526379d20736b00000e/train/javascript
function magNumber(info){
    const mags = {PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5};
    return Math.ceil((3*info[1])/mags[info[0]]);
  }