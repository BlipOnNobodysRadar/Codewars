// 7 kyu Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins
function findAdmin(list, lang) {
  return list.filter(
    (dev) => dev.language === lang && dev.githubAdmin === "yes"
  );
}
