// 7 kyu V A P O R C O D E
function vaporcode(string) {
  return string
    .split("")
    .filter((c) => c !== " ")
    .map((c) => c.toUpperCase())
    .join("  ");
}
