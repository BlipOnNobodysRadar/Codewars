// Meeting (6kyu)
// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

function meeting(s) {
  const formatted = s
    .toUpperCase()
    .split(";")
    .map((person) => {
      return `(${person.split(":").reverse().join(", ")})`;
    });
  return formatted.sort().join("");
}
