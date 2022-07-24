// Word a10n (abbreviation) (6kyu)
// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

function abbreviate(string) {
  // sets up initial step so loop doesn't have to check if 0 every iteration by starting at 1
  let alphaSeq = isAlpha(string[0]);
  let sequence = [string[0]];

  // this will hold the new string in array form as it's constructed
  const returnArr = [];

  //loops through string in arr form, constructing/abbreviating words and non-alpha sequences.
  for (let i = 1; i < string.length; i++) {
    const c = string[i];
    const alpha = isAlpha(c);
    if ((alphaSeq && alpha) || (!alphaSeq && !alpha)) {
      sequence.push(c);
    } else if (alphaSeq && !alpha) {
      returnArr.push(abbreviateWord(sequence.join("")));
      sequence = [c];
      alphaSeq = false;
    } else if (!alphaSeq && alpha) {
      returnArr.push(sequence.join(""));
      sequence = [c];
      alphaSeq = true;
    }
  }
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
