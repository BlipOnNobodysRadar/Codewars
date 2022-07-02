// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
    let open = [];
    let parensArr = parens.split("");
    for(let char of parensArr) {
      if(char === '(') open.push(char)
      else {
          if(open.length === 0) return false;
          open.pop();
      }
    }
    return open.length === 0;
  }