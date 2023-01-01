// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

function sameCase(a, b){
    if(a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) return -1;
    return (a.toLowerCase() === a && b.toLowerCase() === b) || (a.toUpperCase() === a && b.toUpperCase() === b) ? 1 : 0;
  }