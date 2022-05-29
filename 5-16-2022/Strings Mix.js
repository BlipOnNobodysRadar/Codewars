// https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

function mix(s1, s2) {
    const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let substrings = [];
    let s1freq = {}
    for(const char of s1) {
      if(lowerCaseAlphabet.includes(char)) {
        s1freq[char] = s1freq[char] ? s1freq[char] + 1 : 1;
      }
    }
    let s2freq = {}
    for(const char of s2) {
      if(lowerCaseAlphabet.includes(char)) {
        s2freq[char] = s2freq[char] ? s2freq[char] + 1 : 1;
      }
    }
    for(let prop in s1freq) {
      if(s1freq[prop] > 1 && s2freq[prop] > 1) {
        let substring;
        if(s1freq[prop] === s2freq[prop]) substring = `=:${prop.repeat(s1freq[prop])}`;
        if(s1freq[prop] > s2freq[prop]) substring = `1:${prop.repeat(s1freq[prop])}`;
        if(s1freq[prop] < s2freq[prop]) substring = `2:${prop.repeat(s2freq[prop])}`;
        substrings.push(substring);
      }
      if(s1freq[prop] > 1 && !(s2freq[prop] > 1)) {
        let substring = `1:${prop.repeat(s1freq[prop])}`;
        substrings.push(substring);
      }
    }
      for(let prop in s2freq) {
      if(s2freq[prop] > 1 && !(s1freq[prop] > 1)) {
        let substring = `2:${prop.repeat(s2freq[prop])}`;
        substrings.push(substring);
      }
    }
    substrings.sort((a,b) => {
      if(a.length !== b.length) {
        return b.length - a.length;
      }
      if(a > b) return 1;
      if(a === b) return 0;
      if(a < b) return -1;
      });
    return substrings.join('/');
    
  }