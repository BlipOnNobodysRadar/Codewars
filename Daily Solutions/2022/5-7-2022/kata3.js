// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

// new string, if charCount = 1 (, if charCount > 1 )

function duplicateEncode(word){
    let counts = {}
    let splitWord = word.toLowerCase().split("")
    counts = splitWord.reduce((accum, char) => {
                accum[char] = accum[char] ? accum[char] + 1 : 1;
                return accum;
              },counts);
    let returnStr = "";
    for(let char of splitWord) {
      returnStr += counts[char] === 1 ? '(' : ')';
    }
    return returnStr;                                
}


