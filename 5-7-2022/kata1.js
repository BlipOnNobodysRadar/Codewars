// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
/*
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
*/

// for the length of the string minus 1, for each i create new string with 
// toUpperCase() on the i digit in str

function wave(str){
    let result = [];
    for(let i = 0; i < str.length; i++) {
      let currArr = str.split("");
      if(currArr[i] !== " ") {
        currArr[i] = currArr[i].toUpperCase();
        result.push(currArr.join(""));  
      }
      
    }
   return result;
}