//5 kyu Phone Directory

/*
PREP:
Params: A string containing multiple lines of incorrectly formatted name, phone num, and address. And a phone number to look up a person inside that string

Return: A string with the correct person in the format of `Phone => phoneNum, Name => name, Address => address`. If there are multiple people with the same num, return `Error => Too many people: number`. If that number is not in the phone book return `Error => Not found: num`

Psuedocode:
split the incoming string by "\n"
find the correct string by filtering for a number match. If arr contains more than one, error. If none, other error.


*/
function phone(strng, num) {
  let numMatches = strng.split("\n").filter((line) => line.includes(num));
  if (numMatches.length > 1) {
    return `Error => Too many people: ${num}`;
  }
  if (numMatches.length < 1) {
    return `Error => Not found: ${num}`;
  }
  let valid = "abcdefghijklmnopqrstuvwxyz0123456789-.";
  let line = numMatches[0];
  let name = line.slice(line.indexOf("<") + 1, line.indexOf(">"));
  let splitLine = line.split(" ");
  let address = splitLine
    .filter((el) => !el.includes("<") && !el.includes(num) && !el.includes(">"))
    .join(" ");
  return `Phone => ${num}, Name => ${name}, Address => ${address
    .trim()
    .split("")
    .map((c) => (valid.includes(c.toLowerCase()) ? c : " "))
    .join("")
    .split(" ")
    .filter((e) => e !== "")
    .join(" ")}`;
}
