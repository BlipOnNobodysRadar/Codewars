// Word a10n (abbreviation) (6kyu)
// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

function abbreviate(string) {
  const returnArr = [];

  // sets up so loop doesn't have to check if 0 every iteration by starting at 1
  let alphaSeq = isAlpha(string[0]);
  let sequence = [string[0]];

  //loops through string in arr form
  for (let i = 1; i < string.length; i++) {
    const c = string[i];
    const alpha = isAlpha(c);

    // if seq not interrupted, add to it. Else, push sequence and alternate to other type.
    if ((alphaSeq && alpha) || (!alphaSeq && !alpha)) {
      sequence.push(c);
    } else {
      alphaSeq
        ? returnArr.push(abbreviateWord(sequence.join("")))
        : returnArr.push(sequence.join(""));
      alphaSeq = alphaSeq ? false : true;
      sequence = [c];
    }
  }

  // closes by pushing the final sequence to the returnArr.
  alphaSeq
    ? returnArr.push(abbreviateWord(sequence.join("")))
    : sequence.join("");

  return returnArr.join("");
}
function isAlpha(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.includes(str);
}
function abbreviateWord(str) {
  if (str.length < 4) return str;
  return str[0] + (str.length - 2) + str[str.length - 1];
}
