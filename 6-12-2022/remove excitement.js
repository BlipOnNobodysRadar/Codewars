// https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript

function remove(string) {
  return string.endsWith('!') ? string.slice(0, -1) : string;
}
