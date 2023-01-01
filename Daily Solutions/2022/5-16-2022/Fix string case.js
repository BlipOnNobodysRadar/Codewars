// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s){
    let upperCaseCount = 0;
    let lowerCaseCount = 0;
    for(let i = 0; i < s.length; i++) {
      s[i] === s[i].toUpperCase() ? upperCaseCount++ : lowerCaseCount++;
    }
    return lowerCaseCount >= upperCaseCount ? s.toLowerCase() : s.toUpperCase();
}