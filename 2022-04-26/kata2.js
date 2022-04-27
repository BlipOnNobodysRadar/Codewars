//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
    let shortestLength = Infinity;
    s.split(' ').forEach(word => {
        if(word.length < shortestLength) {
          shortestLength = word.length;
        }
     })
    return shortestLength;
  }