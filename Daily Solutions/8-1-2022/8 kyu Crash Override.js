// 8 kyu Crash Override
function aliasGen(f, s) {
  return firstName[f[0].toUpperCase()] && surname[s[0].toUpperCase()]
    ? firstName[f[0].toUpperCase()] + " " + surname[s[0].toUpperCase()]
    : "Your name must start with a letter from A - Z.";
}
