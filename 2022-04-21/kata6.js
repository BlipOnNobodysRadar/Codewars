//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/
function longest(s1, s2) {
    let chars = []
    const bigS = s1 + s2;
    bigS.split("")
      .forEach(char => {
        if(!chars.includes(char)) chars.push(char);
      });
    return chars.sort().join("");
  }