// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/
function zero(operation='') {return parseInt(eval(0 + operation))}
function one(operation='') {return parseInt(eval(1 + operation))}
function two(operation='') {return parseInt(eval(2 + operation))}
function three(operation='') {return parseInt(eval(3 + operation))}
function four(operation='') {return parseInt(eval(4 + operation))}
function five(operation='') {return parseInt(eval(5 + operation))}
function six(operation='') {return parseInt(eval(6 + operation))}
function seven(operation='') {return parseInt(eval(7 + operation))}
function eight(operation='') {return parseInt(eval(8 + operation))}
function nine(operation='') {return parseInt(eval(9 + operation))}

function plus(num) { return ` + ${num}`};
function minus(num) { return ` - ${num}`};
function times(num) { return ` * ${num}`};
function dividedBy(num) { return ` / ${num}`};

