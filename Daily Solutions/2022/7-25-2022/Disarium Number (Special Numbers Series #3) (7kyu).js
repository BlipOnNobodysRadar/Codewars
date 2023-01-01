// Disarium Number (Special Numbers Series #3) (7kyu)
// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript

function disariumNumber(n) {
  return n ===
    n
      .toString()
      .split("")
      .reduce((sum, s, i) => Number(s) ** (i + 1) + sum, 0)
    ? "Disarium !!"
    : "Not !!";
}
