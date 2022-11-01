// 6 kyu String transformer
function stringTransformer(str) {
  let newStr = str
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char) =>
          char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
        )
        .join("");
    })
    .reverse()
    .join(" ");
  return newStr;
}
