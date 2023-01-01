// Word values (7kyu)
// https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript

function wordValue(a) {
  // PREP

  // P
  //  an array containing strings of letters

  // R
  //    an array with each string converted into values where each letter is equal to its place in the alphabet,
  //    and such values are summed. The sum value is then multiplied by the position of the string in the list (start 1)

  // E
  //    Given

  // P
  //    map the array tracking i, do conversion of each word to its value, return mapped array
  //    conversion: split().reduce(sum, letter) => charCodeAt - 96 for each letter, then multiply that sum by i+1
  return a.map(
    (word, i) =>
      word
        .split("")
        .reduce((sum, c) => (c !== " " ? sum + c.charCodeAt() - 96 : sum), 0) *
      (i + 1)
  );
}
