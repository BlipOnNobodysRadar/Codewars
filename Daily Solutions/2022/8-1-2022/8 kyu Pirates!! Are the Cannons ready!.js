// 8 kyu Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => {
  for (let key in gunners) {
    if (gunners[key] !== "aye") return "Shiver me timbers!";
  }
  return "Fire!";
};
