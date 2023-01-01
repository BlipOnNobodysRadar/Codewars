// https://www.codewars.com/kata/554b4ac871d6813a03000035/
/*
    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
    Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.

*/
function highAndLow(numbers){
    //creates an arr of the individual nums and sorts the arr form highest to lowest
    const numArr = numbers.split(" ").sort((a,b) => b - a);
    //returns highest and lowest in the specified string template
    return `${numArr[0]} ${numArr[numArr.length - 1]}`;
  }
