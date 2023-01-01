// Moves in squared strings (I) (7kyu)
// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

//PREP
// P
//    One string with 4 sections seperated by \n

// R
//    vert: One string with each section's letters reversed
//    hor: One string with the order of sections reversed

// E
//    Included in details

// P
//    vert: split by \n, then split each of those substrings, reverse, and join in one map operation. Then join and return.
//    hor: split by \n, reverse that array, then join with \n

function vertMirror(strng) {
  return strng
    .split("\n")
    .map((ss) => ss.split("").reverse().join(""))
    .join("\n");
}
function horMirror(strng) {
  return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
  return fct(s);
}
