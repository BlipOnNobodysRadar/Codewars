// 8 kyu Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n) {
  const decPos = n.toString().indexOf(".");
  const right = n.toString().length - decPos - 1;
  return decPos === right
    ? Math.round(n)
    : decPos < right
    ? Math.ceil(n)
    : Math.floor(n);
}
