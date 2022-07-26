// What century is it (6kyu)
// https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript

function whatCentury(year) {
  const suffixObj = { 1: "st", 2: "nd", 3: "rd" };
  let century;
  let suffix;
  if (year[0] === "0") {
    century = "1";
  } else {
    century =
      year[3] === "0" && year[2] === "0"
        ? year[0] + year[1]
        : (Number(year[0] + year[1]) + 1).toString();
  }
  suffix =
    century[0] === "1"
      ? "th"
      : suffixObj[century[century.length - 1]]
      ? suffixObj[century[century.length - 1]]
      : "th";
  return century + suffix;
}
