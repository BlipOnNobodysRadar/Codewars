// 7 kyu Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(list) {
  let count = 0;
  for (const person of list) {
    if (person.continent === "Europe" && person.language === "JavaScript")
      count++;
  }
  return count;
}
