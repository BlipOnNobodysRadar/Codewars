// 7 kyu Simple string characters
function solve(s) {
  s = s.split("");
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const specialArr = s.filter(
    (c) => !nums.includes(c) && !alphabet.includes(c)
  );
  const numsArr = s.filter((c) => nums.includes(c));
  const upperArr = s.filter(
    (c) => !specialArr.includes(c) && !nums.includes(c) && c.toUpperCase() === c
  );
  const lowerArr = s.filter(
    (c) => !specialArr.includes(c) && !nums.includes(c) && c.toLowerCase() === c
  );
  return [upperArr.length, lowerArr.length, numsArr.length, specialArr.length];
}
