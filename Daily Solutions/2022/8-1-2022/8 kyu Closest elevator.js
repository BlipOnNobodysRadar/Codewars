// 8 kyu Closest elevator
function elevator(left, right, call) {
  return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right";
}
