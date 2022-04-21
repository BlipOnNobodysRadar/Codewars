// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || input.length === 0) return [];
    counts = input.reduce((count, val) => 
    {
        if(val > 0) {
            count[0] = count[0] + 1;
        } else if(val < 0) {
            count[1] = count[1] + val;
        }
        return count;
    },[0,0]);
    return counts
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));