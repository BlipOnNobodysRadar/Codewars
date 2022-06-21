// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

function abbreviate(string) {
  const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const splitChars = string.split('').filter((c) => !alpha.includes(c));
  if (splitChars.length === 0) return abbreviateWord(string);
  const words = [];
  let splitPlace = 0;
  const stringArr = string.split('');
  for (let i = 0; i < stringArr.length; i++) {
    if (!alpha.includes(stringArr[i]) || i === stringArr.length - 1) {
      words.push(stringArr.slice(splitPlace, i).join(''));
      splitPlace = i + 1;
    }
  }
  console.log(splitChars);
  console.log(words);
  abbrWords = words.map((word) => abbreviateWord(word));
  console.log(abbrWords);
  let returnStr = '';
  for (word of abbrWords) {
    returnStr += word;
    returnStr += splitChars.shift();
  }
  while (splitChars.length > 0) returnStr += splitChars.shift();
  console.log(returnStr);
  return returnStr;
}
function abbreviateWord(string) {
  if (string.length < 4) return string;
  return (
    string[0] +
    string.slice(1, string.length - 1).length +
    string[string.length - 1]
  );
}
abbreviate('elephant-ride');
