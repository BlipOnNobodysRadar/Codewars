// 8 kyu Are there any arrows left
function anyArrows(arrows) {
  if (arrows.length === 0) return false;
  return arrows.some((a) => !a.damaged);
}
