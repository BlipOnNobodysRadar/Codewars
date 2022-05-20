// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
      if(numbers.includes(target - numbers[i])) {
        const index2 = numbers.findIndex((num ,index) => num === target - numbers[i] && index !== i)
        return [i,index2]
      }
    }
}