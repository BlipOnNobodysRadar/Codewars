// Indexed capitalization (7kyu)
// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

// tried to make a faster solution, but ends up slower at scale.
// O(n log(n) + n);
function capitalize(s, arr) {
  let returnStr = "";
  let arrCount = 0;
  arr = arr.sort((a, b) => a - b); // O(nlog(n))
  for (let i = 0; i < s.length; i++) {
    // O(n)
    returnStr += i === arr[arrCount] ? s[i].toUpperCase() : s[i];
    if (i === arr[arrCount]) arrCount++;
  }
}

// O(3n);
function capitalize(s, arr) {
  const sArr = s.split(""); // O(n)
  arr.forEach((n) => (sArr[n] ? (sArr[n] = sArr[n].toUpperCase()) : undefined)); // O(n)
  return sArr.join(""); // O(n)
}
