// 7 kyu Hells Kitchen
function gordon(a) {
  const vowels = "EIOU";
  return a
    .toUpperCase()
    .split(" ")
    .map(
      (word) =>
        word
          .split("")
          .map((l) => {
            if (l === "A") return "@";
            return vowels.includes(l) ? "*" : l;
          })
          .join("") + "!!!!"
    )
    .join(" ");
}
