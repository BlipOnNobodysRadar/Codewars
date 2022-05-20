// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript

function alphanumeric(string){
    const validInputs = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789').split('');  
    for(const char of string.split('')) {
      if (!validInputs.includes(char)) return false;
    }
    return string.length !== 0;
  }