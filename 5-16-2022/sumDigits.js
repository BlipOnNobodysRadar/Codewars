function sumDigits(number) {
    return number.toString().split('').reduce((sum, dig) => {
      if(!Number(dig)) return sum;
      return sum + Number(dig);
      },0)
  }
  
  