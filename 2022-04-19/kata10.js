//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
*/
function isIsogram(str){
    const lower = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
      if(lower.indexOf(str[i]) !== lower.lastIndexOf(str[i])) {
        return false;
      }
    }
    return true;
  }