// 8 kyu Area of a Square
function squareArea(A) {
  return +(((A * 4) / Math.PI / 2) ** 2).toFixed(2);
}

// Circumference is 4 * arc.
// Circumference is also 2*pi*r.
// The diameter of a circle inside of a square is equivalent to the length of
// that square's side.
// Since this is 1/4th of the larger circle, square, the length is the radius.
/*
  const radius = (4*A)/(2*Math.PI)
  return radius**2;
*/
