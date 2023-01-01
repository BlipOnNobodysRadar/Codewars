// Prize Draw (6kyu)
// https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript

// case insensitive ranking of letters in first name
// sum of those letter rankings plus length of name
// array of random weights linked to firstnames. som (prev value) multiplied by weights.
// highest determined winner with "winning number"
// sort names in decreasing order of their winning numbers. is same value, sort alphabetically
// return index n-1 of the sorted names

// split string of names into individual names
// getSom of each of those names AND
// multiply som by weight of same index
// sort according to that value OR if two vals are the same, alphabetically
// all this should be stored in an array so you can reference index n-1 as the return value

function rank(st, we, n) {
  if (st === "") return "No participants";
  if (n > st.split(",").length) return "Not enough participants";
  const nameArr = st.split(",");
  const sorted = nameArr.sort((a, b) => {
    const aIndex = nameArr.indexOf(a);
    const bIndex = nameArr.indexOf(b);
    aVal = getSom(a) * we[aIndex];
    bVal = getSom(b) * we[bIndex];
    return bVal - aVal !== 0 ? bVal - aVal : a.localeCompare(b);
  });
  return sorted[n - 1];
}
function getSom(str) {
  return (
    str
      .split("")
      .reduce((sum, c) => c.toLowerCase().charCodeAt() - 96 + sum, 0) +
    str.length
  );
}
