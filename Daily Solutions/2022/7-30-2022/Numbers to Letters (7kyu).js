// Numbers to Letters (7kyu)
// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

function switcher(x) {
  // PREP

  // P
  //  An array containing strings representing numbers. The numbers corresport to alphabet in reverse order.
  //  27 = '!', 28 = '?' and ' ' = 29.

  // R
  //  A string of the converted letters and symbols.

  // E
  //  In test cases

  // P
  //  a is 97, z is 122 in ascii. 123- charCode = letterNum.
  // charCode = 123 - letterNum
  // make obj for 27, 28, 29
  // for any less thsn 27, do charCode method
  // first, .map() to convert each entry into letter/symbol. Then .join('') for final value
  const symbol = { 27: "!", 28: "?", 29: " " };
  return x
    .map((s) => (symbol[s] ? symbol[s] : String.fromCharCode(123 - Number(s))))
    .join("");
}
