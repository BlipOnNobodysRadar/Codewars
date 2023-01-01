// Character Frequency (8kyu)
// https://www.codewars.com/kata/548ef5b7f33a646ea50000b2/train/javascript

function charFreq(message) {
  const returnObj = {};
  message.split("").reduce((obj, c) => {
    obj[c] = obj[c] ? obj[c] + 1 : 1;
    return obj;
  }, returnObj);
  return returnObj;
}
