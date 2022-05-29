// https://www.codewars.com/kata/57e1e61ba396b3727c000251
function stringClean(s){
    const digits = '0123456789'.split('');
    return s.split('').filter(d => !digits.includes(d)).join('');
  }