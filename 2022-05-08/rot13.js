// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const upperAlphabet = lowerAlphabet.join('').toUpperCase().split('');
    return message
                  .split('')
                  .map(char => {
                    let l = lowerAlphabet.indexOf(char);
                    let u = upperAlphabet.indexOf(char);
                    if(l !== -1) return lowerAlphabet[(l+13) % 26];
                    if(u !== -1) return upperAlphabet[(u+13) % 26];
                    return char;
                  })
                  .join('');
  }