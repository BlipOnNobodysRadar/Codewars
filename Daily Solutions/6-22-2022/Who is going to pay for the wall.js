// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript

function whoIsPaying(name) {
  return name.length > 2 ? [name, name[0] + name[1]] : [name];
}
