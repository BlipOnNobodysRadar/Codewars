// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
var uniqueInOrder=function(iterable){
    let newArr = [];
    if(typeof iterable === 'string') {
      iterable = iterable.split("");
    }
    if(iterable[0]) newArr.push(iterable[0]);
    for(let i = 1; i < iterable.length; i++) {
      if(iterable[i] !== iterable[i-1]) newArr.push(iterable[i]);
    }
    return newArr;
  }
