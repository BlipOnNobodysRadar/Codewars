//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/
/*
    Complete the solution so that it reverses the string passed into it. 
*/

function solution(str){
    //splits into arr of individual chars, reverses arr, joins back to string.
  return str.split("").reverse().join("");
}