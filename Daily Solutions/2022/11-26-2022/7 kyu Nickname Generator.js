// 7 kyu Nickname Generator
function nicknameGenerator(name) {
  const vowels = "aeiou";
  if (name.length < 4) return "Error: Name too short";
  return vowels.includes(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
}
