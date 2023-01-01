// 7 kyu Street Bowling
function ballTest(s, r) {
  let cracks = 0;
  let distanceTraveled = 0;
  let lastIncrement = 0;
  for (let i = 0; i < r.split("").length; i++) {
    distanceTraveled++;
    if (r[i] === "x") cracks++;
    if (distanceTraveled >= s) {
      if (i + 1 === r.length) return true;
      s = s - (1 + cracks);
      distanceTraveled = 0;
      cracks = 0;
      if (s === 0 && i !== r.length - 1) return false;
    }
    if (s < 0) return false;
  }
  return true;
}
