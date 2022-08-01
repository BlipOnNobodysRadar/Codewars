// Well of Ideas - Easy Version (8kyu)
function well(x) {
  let g = 0;
  x.forEach((y) => {
    if (y === "good") g++;
  });
  return g > 2 ? "I smell a series!" : g > 0 ? "Publish!" : "Fail!";
}
