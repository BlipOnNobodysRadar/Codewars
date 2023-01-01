// 8 kyu Pole Vault Starting Marks
function startingMark(bodyHeight) {
  const slope = 3.9354838709677419354838709677419;
  const b = 3.4680645161290322580645161290323;

  return +(slope * bodyHeight + b).toFixed(2);
}
