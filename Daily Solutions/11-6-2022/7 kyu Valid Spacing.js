// 7 kyu Valid Spacing
/*
p a string containied varied spacing between words, or no spacing at all
r whether the string has valid spacing: one space between words, no leading or training spaces
p if the split string contains no empy space chars, return true
*/

function validSpacing(s) {
  return s === "" ? true : !s.split(" ").includes("");
}
