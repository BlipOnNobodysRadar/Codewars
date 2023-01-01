// 7 kyu Responsible Drinking
function hydrate(s) {
  let drinks = s
    .split(" ")
    .reduce(
      (drinks, val) =>
        Number.isInteger(Number(val)) ? Number(val) + drinks : drinks,
      0
    );
  return drinks === 1 ? `1 glass of water` : `${drinks} glasses of water`;
}
