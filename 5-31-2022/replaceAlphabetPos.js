
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

//PREP
// Params: a string
// Returns: A string, every letter replace by alphabet position, space separated.
// Examples: Given
// psuedo code:
    // alphabet Arr to check against
    // convert param to lowerCase
    // remove non-alphabet chars from param
    // convert chars to num arr
    // convert num arr to properly formated string


    //First pass
    function alphabetPosition(text) {
        const alph = "abcdefghijklmnopqrstuvwxyz".split('');
        const cleanedText = text.toLowerCase().split('').filter(c => alph.includes(c));
        return cleanedText.map(c => alph.indexOf(c) + 1).join(' ');
      }
    //minified
    function alphabetPosition(text) {
        const alph = "abcdefghijklmnopqrstuvwxyz".split('');
        return text.toLowerCase().split('').filter(c => alph.includes(c)).map(c => alph.indexOf(c) + 1).join(' ');
      }
