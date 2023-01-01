// 7 kyu Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
function getFirstPython(list) {
  const first = list.find((obj) => obj.language === "Python");
  return first
    ? `${first.firstName}, ${first.country}`
    : "There will be no Python developers";
}
