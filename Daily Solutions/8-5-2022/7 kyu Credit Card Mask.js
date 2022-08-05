// 7 kyu Credit Card Mask
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}
