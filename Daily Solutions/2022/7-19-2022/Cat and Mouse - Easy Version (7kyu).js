// Cat and Mouse - Easy Version (7kyu)
// https://www.codewars.com/kata/57ee24e17b45eff6d6000164/javascript

function catMouse(x) {
  return Math.abs(x.indexOf("C") - (x.indexOf("m") - 1)) <= 3
    ? "Caught!"
    : "Escaped!";
}
