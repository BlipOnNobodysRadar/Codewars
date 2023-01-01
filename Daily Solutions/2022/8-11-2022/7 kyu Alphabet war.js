// 7 kyu Alphabet war
function alphabetWar(fight) {
  let left = 0;
  let right = 0;
  const dict = {
    w: () => (left += 4),
    p: () => (left += 3),
    b: () => (left += 2),
    s: () => (left += 1),
    m: () => (right += 4),
    q: () => (right += 3),
    d: () => (right += 2),
    z: () => (right += 1),
  };
  for (let i = 0; i < fight.length; i++) {
    if (dict[fight[i]]) {
      dict[fight[i]]();
    }
  }
  return left === right
    ? "Let's fight again!"
    : left > right
    ? "Left side wins!"
    : "Right side wins!";
}
